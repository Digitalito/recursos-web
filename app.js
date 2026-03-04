// ============================================================
// app.js — Application orchestrator
// ============================================================
// Boots all modules, wires events, manages the full lifecycle.
// ============================================================

import { RESOURCES } from "./data.js";
import { state, setState, subscribe } from "./modules/state.js";
import { filterResources, getCategories, getSubcategories } from "./modules/filters.js";
import {
  renderCards,
  renderCategoryTabs,
  renderSubcategoryChips,
  renderResultCount,
  renderNoResults,
  renderModal,
  renderFeaturedSection,
} from "./modules/renderer.js";
import {
  initScrollReveal,
  observeCards,
  capturePositions,
  flipAnimate,
  animateHero,
  animateModalIn,
  animateModalOut,
  animateTabSwitch,
  animateSubcategoryChips,
  debounce,
} from "./modules/animations.js";

// ── DOM References ──────────────────────────────────────────

const $ = (sel) => document.querySelector(sel);
const heroEl = $("#hero");
const searchInput = $("#search-input");
const resultCountEl = $("#result-count");
const categoryTabsEl = $("#category-tabs");
const subcategoryChipsEl = $("#subcategory-chips");
const featuredSectionEl = $("#featured-section");
const resourceGridEl = $("#resource-grid");
const noResultsEl = $("#no-results");
const modalOverlay = $("#modal-overlay");

// ── Initialize State ────────────────────────────────────────

setState("allResources", RESOURCES);
setState("filtered", RESOURCES);

// ── Core Update Pipeline ────────────────────────────────────

/**
 * Central function: filter resources based on current state and re-render.
 * Called whenever category, subcategory, or search changes.
 */
function updateView() {
  const oldPositions = capturePositions(resourceGridEl);
  // Also capture featured if visible
  const oldFeaturedPositions = capturePositions(featuredSectionEl);

  const filtered = filterResources(state.allResources, {
    category: state.category,
    subcategory: state.subcategory,
    query: state.searchQuery,
    tags: state.activeTags,
  });

  const isDefaultView = (state.category === "all" || !state.category) && 
                        (state.subcategory === "all" || !state.subcategory) && 
                        (!state.searchQuery || state.searchQuery.trim() === "") &&
                        (!state.activeTags || state.activeTags.length === 0);

  let featuredItems = [];
  let regularItems = filtered;

  if (isDefaultView) {
    // Extract up to 4 featured
    featuredItems = filtered.filter(r => r.featured).slice(0, 4);
    const featuredIds = new Set(featuredItems.map(r => r.id));
    regularItems = filtered.filter(r => !featuredIds.has(r.id));
  } else {
    // In filtered view, featured items stay in the main grid
    featuredSectionEl.style.display = "none";
    featuredSectionEl.innerHTML = "";
  }

  state.filtered = filtered;

  // Render featured section if any
  const newFeaturedCards = renderFeaturedSection(featuredSectionEl, featuredItems);
  
  // Render main cards
  const newCards = renderCards(resourceGridEl, regularItems, isDefaultView);

  // Animate
  flipAnimate(resourceGridEl, oldPositions);
  if (featuredItems.length > 0) flipAnimate(featuredSectionEl, oldFeaturedPositions);

  const allNewCards = [...newFeaturedCards, ...newCards];
  if (allNewCards.length > 0) {
    observeCards(allNewCards);
  }

  // Result count
  renderResultCount(resultCountEl, filtered.length, state.allResources.length);

  // No results state
  renderNoResults(noResultsEl, filtered.length === 0, state.searchQuery);

  // Show/hide grid
  resourceGridEl.style.display = regularItems.length > 0 ? "grid" : "none";
}

// ── Category Tab Handling ─────────────────────────────────

function handleCategoryChange(category) {
  const oldTab = categoryTabsEl.querySelector(".tab-active");
  setState("category", category);
  setState("subcategory", "all");

  // Re-render tabs to update active state
  const categories = getCategories(state.allResources);
  renderCategoryTabs(categoryTabsEl, categories, category, handleCategoryChange);
  const newTab = categoryTabsEl.querySelector(".tab-active");
  animateTabSwitch(oldTab, newTab);

  // Update subcategory chips
  const subcategories = getSubcategories(state.allResources, category);
  renderSubcategoryChips(subcategoryChipsEl, subcategories, "all", handleSubcategoryChange);
  animateSubcategoryChips(subcategoryChipsEl, subcategories.length > 0);

  updateView();
}

// ── Subcategory Handling ────────────────────────────────────

function handleSubcategoryChange(subcategory) {
  setState("subcategory", subcategory);

  const subcategories = getSubcategories(state.allResources, state.category);
  renderSubcategoryChips(subcategoryChipsEl, subcategories, subcategory, handleSubcategoryChange);

  updateView();
}

// ── Search Handling ─────────────────────────────────────────

const handleSearch = debounce((query) => {
  setState("searchQuery", query);
  updateView();
}, 200);

searchInput.addEventListener("input", (e) => {
  handleSearch(e.target.value);
});

// ── Modal Handling ──────────────────────────────────────────

function openModal(resource) {
  renderModal(modalOverlay, resource);
  modalOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  animateModalIn(modalOverlay);

  // Wire close button
  const closeBtn = modalOverlay.querySelector(".modal-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  // Close on backdrop click
  modalOverlay.addEventListener("click", handleBackdropClick);
}

function closeModal() {
  modalOverlay.removeEventListener("click", handleBackdropClick);
  modalOverlay.setAttribute("aria-hidden", "true");
  animateModalOut(modalOverlay, () => {
    document.body.style.overflow = "";
  });
}

function handleBackdropClick(e) {
  if (e.target === modalOverlay) {
    closeModal();
  }
}

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalOverlay.style.display === "flex") {
    closeModal();
  }
  // Focus search with "/" key
  if (e.key === "/" && document.activeElement !== searchInput) {
    e.preventDefault();
    searchInput.focus();
  }
});

// ── Card Click Delegation ───────────────────────────────────

resourceGridEl.addEventListener("click", (e) => {
  const card = e.target.closest(".resource-card");
  if (!card) return;
  // Don't open modal if a button/link was clicked
  if (e.target.closest("a")) return;

  const resource = state.allResources.find((r) => r.id === card.dataset.id);
  if (resource) openModal(resource);
});

featuredSectionEl.addEventListener("click", (e) => {
  const card = e.target.closest(".resource-card");
  if (!card) return;
  if (e.target.closest("a")) return;

  const resource = state.allResources.find((r) => r.id === card.dataset.id);
  if (resource) openModal(resource);
});

// Keyboard support for cards
resourceGridEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const card = e.target.closest(".resource-card");
    if (!card) return;
    const resource = state.allResources.find((r) => r.id === card.dataset.id);
    if (resource) openModal(resource);
  }
});

featuredSectionEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const card = e.target.closest(".resource-card");
    if (!card) return;
    const resource = state.allResources.find((r) => r.id === card.dataset.id);
    if (resource) openModal(resource);
  }
});

// ── Boot Sequence ───────────────────────────────────────────

function boot() {
  // 1. Initialize animations
  initScrollReveal();

  // 2. Render categories
  const categories = getCategories(state.allResources);
  renderCategoryTabs(categoryTabsEl, categories, "all", handleCategoryChange);

  // 3. Render initial state (this will call updateView indirectly or we can call it)
  updateView();

  // 5. Animate hero
  animateHero(heroEl);

  // 6. Hide subcategory chips initially
  subcategoryChipsEl.style.display = "none";
}

// Start the app
boot();
