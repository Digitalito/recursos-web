// ============================================================
// renderer.js — All DOM creation and manipulation
// ============================================================
// Uses DocumentFragment for batch rendering.
// Diff-based card updates: only add/remove what changed.
// ============================================================

// ── Card Rendering ─────────────────────────────────────────

/**
 * Build a single resource card element.
 * @param {Object} resource
 * @returns {HTMLElement}
 */
function createCard(resource) {
  const card = document.createElement("article");
  card.className = "resource-card card-hidden";
  card.dataset.id = resource.id;
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Ver detalles de ${resource.name}`);

  // Subcategory badge
  const badge = resource.subcategory
    ? `<span class="card-badge">${resource.subcategory}</span>`
    : "";

  // Tags
  const tagsHTML = resource.tags
    .map((tag) => `<span class="card-tag">${tag}</span>`)
    .join("");

  // Button
  const btnClass = resource.download ? "btn btn-download" : "btn btn-official";
  const btnText = resource.download ? "Descargar" : "Web oficial";
  const btnHref = resource.download || resource.official;

  card.innerHTML = `
    <div class="card-header">
      <h3 class="card-title">${resource.name}</h3>
      ${badge}
    </div>
    <p class="card-desc">${resource.desc}</p>
    <div class="card-footer">
      <div class="card-tags">${tagsHTML}</div>
      <a href="${btnHref}" target="_blank" rel="noopener noreferrer"
         class="${btnClass}" onclick="event.stopPropagation()">
        ${btnText}
        <svg class="btn-icon" viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
          ${
            resource.download
              ? '<path d="M10 3a1 1 0 011 1v7.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 11.586V4a1 1 0 011-1z"/><path d="M3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>'
              : '<path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5zm7.25-.75a.75.75 0 01.75-.75h3.5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l5.47-5.47H12.25a.75.75 0 01-.75-.75z" clip-rule="evenodd"/>'
          }
        </svg>
      </a>
    </div>
  `;

  return card;
}

/**
 * Render resource cards into the grid container.
 * Uses diff-based approach: reuses existing cards, adds new, removes stale.
 * @param {HTMLElement} container
 * @param {Array} resources
 * @returns {HTMLElement[]} Array of new card elements (for animation)
 */
export function renderCards(container, resources) {
  const existingCards = new Map();
  container.querySelectorAll(".resource-card").forEach((card) => {
    existingCards.set(card.dataset.id, card);
  });

  const newIds = new Set(resources.map((r) => r.id));
  const newCards = [];

  // Remove cards that are no longer in the filtered set
  existingCards.forEach((card, id) => {
    if (!newIds.has(id)) {
      card.remove();
    }
  });

  // Build fragment with new cards, reuse existing ones
  const fragment = document.createDocumentFragment();
  resources.forEach((resource) => {
    if (existingCards.has(resource.id)) {
      fragment.appendChild(existingCards.get(resource.id));
    } else {
      const card = createCard(resource);
      newCards.push(card);
      fragment.appendChild(card);
    }
  });

  container.appendChild(fragment);
  return newCards;
}

// ── Category Tabs ──────────────────────────────────────────

/**
 * Render category tab buttons.
 * @param {HTMLElement} container
 * @param {string[]} categories
 * @param {string} activeCategory
 * @param {Function} onClick - Callback when tab is clicked
 */
export function renderCategoryTabs(container, categories, activeCategory, onClick) {
  container.innerHTML = "";
  const fragment = document.createDocumentFragment();

  // "All" tab
  const allTab = document.createElement("button");
  allTab.className = `tab ${activeCategory === "all" ? "tab-active" : ""}`;
  allTab.textContent = "Todos";
  allTab.dataset.category = "all";
  allTab.addEventListener("click", () => onClick("all"));
  fragment.appendChild(allTab);

  categories.forEach((cat) => {
    const tab = document.createElement("button");
    tab.className = `tab ${activeCategory === cat ? "tab-active" : ""}`;
    tab.textContent = cat;
    tab.dataset.category = cat;
    tab.addEventListener("click", () => onClick(cat));
    fragment.appendChild(tab);
  });

  container.appendChild(fragment);
}

// ── Subcategory Chips ──────────────────────────────────────

/**
 * Render subcategory chip buttons.
 * @param {HTMLElement} container
 * @param {string[]} subcategories
 * @param {string} activeSubcategory
 * @param {Function} onClick
 */
export function renderSubcategoryChips(container, subcategories, activeSubcategory, onClick) {
  container.innerHTML = "";

  if (subcategories.length === 0) {
    container.style.display = "none";
    return;
  }

  const fragment = document.createDocumentFragment();

  // "All" chip
  const allChip = document.createElement("button");
  allChip.className = `chip ${activeSubcategory === "all" ? "chip-active" : ""}`;
  allChip.textContent = "Todas";
  allChip.addEventListener("click", () => onClick("all"));
  fragment.appendChild(allChip);

  subcategories.forEach((sub) => {
    const chip = document.createElement("button");
    chip.className = `chip ${activeSubcategory === sub ? "chip-active" : ""}`;
    chip.textContent = sub;
    chip.addEventListener("click", () => onClick(sub));
    fragment.appendChild(chip);
  });

  container.appendChild(fragment);
}

// ── Result Count ───────────────────────────────────────────

/**
 * Render the result count indicator.
 * @param {HTMLElement} container
 * @param {number} count - Filtered count
 * @param {number} total - Total count
 */
export function renderResultCount(container, count, total) {
  if (count === total) {
    container.textContent = `${total} recursos disponibles`;
  } else {
    container.textContent = `${count} de ${total} recursos`;
  }
}

// ── No Results Message ─────────────────────────────────────

/**
 * Show or hide the "no results" message.
 * @param {HTMLElement} container
 * @param {boolean} show
 * @param {string} query
 */
export function renderNoResults(container, show, query = "") {
  if (show) {
    container.innerHTML = `
      <div class="no-results-content">
        <svg class="no-results-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="48" height="48">
          <circle cx="11" cy="11" r="8"/>
          <path d="M21 21l-4.35-4.35" stroke-linecap="round"/>
        </svg>
        <h3>Sin resultados</h3>
        <p>No se encontraron recursos${query ? ` para "<strong>${query}</strong>"` : ""}.</p>
        <p class="no-results-hint">Intenta con otros términos o explora otra categoría.</p>
      </div>
    `;
    container.style.display = "flex";
  } else {
    container.style.display = "none";
    container.innerHTML = "";
  }
}

// ── Modal ──────────────────────────────────────────────────

/**
 * Populate and return the modal with resource details.
 * @param {HTMLElement} overlay
 * @param {Object} resource
 */
export function renderModal(overlay, resource) {
  const content = overlay.querySelector(".modal-content");
  if (!content) return;

  const tagsHTML = resource.tags
    .map((tag) => `<span class="modal-tag">${tag}</span>`)
    .join("");

  const buttons = [];
  if (resource.official) {
    buttons.push(
      `<a href="${resource.official}" target="_blank" rel="noopener noreferrer" class="btn btn-official">
        Web oficial
        <svg class="btn-icon" viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
          <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5zm7.25-.75a.75.75 0 01.75-.75h3.5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l5.47-5.47H12.25a.75.75 0 01-.75-.75z" clip-rule="evenodd"/>
        </svg>
      </a>`
    );
  }
  if (resource.download) {
    buttons.push(
      `<a href="${resource.download}" target="_blank" rel="noopener noreferrer" class="btn btn-download">
        Descargar
        <svg class="btn-icon" viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
          <path d="M10 3a1 1 0 011 1v7.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 11.586V4a1 1 0 011-1z"/>
          <path d="M3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>
        </svg>
      </a>`
    );
  }

  content.innerHTML = `
    <button class="modal-close" aria-label="Cerrar modal">&times;</button>
    <div class="modal-header">
      <h2 class="modal-title">${resource.name}</h2>
      <div class="modal-meta">
        <span class="modal-category">${resource.category}</span>
        ${resource.subcategory ? `<span class="modal-subcategory">${resource.subcategory}</span>` : ""}
      </div>
    </div>
    <p class="modal-desc">${resource.desc}</p>
    <div class="modal-tags">${tagsHTML}</div>
    <div class="modal-actions">${buttons.join("")}</div>
  `;
}
