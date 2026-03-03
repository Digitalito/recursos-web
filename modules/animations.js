// ============================================================
// animations.js — Unified animation system
// ============================================================
// Only animates transform and opacity (GPU-composited, no layout thrashing).
// Global easing: cubic-bezier(.22,.61,.36,1) from CSS var(--ease).
// ============================================================

const EASE = "cubic-bezier(.22,.61,.36,1)";
const DURATION = 400; // ms
const STAGGER = 50;   // ms between sequential card animations

// ── Scroll Reveal with IntersectionObserver ─────────────────

let observer = null;

/**
 * Initialize IntersectionObserver for scroll-reveal on cards.
 * Cards start with .card-hidden and get .card-visible on intersect.
 */
export function initScrollReveal() {
  if (observer) observer.disconnect();

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((e) => e.isIntersecting);
      visible.forEach((entry, i) => {
        setTimeout(() => {
          entry.target.classList.add("card-visible");
          entry.target.classList.remove("card-hidden");
        }, i * STAGGER);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
  );
}

/**
 * Observe a list of card elements for scroll reveal.
 * @param {HTMLElement[]} cards
 */
export function observeCards(cards) {
  if (!observer) initScrollReveal();
  cards.forEach((card) => {
    card.classList.add("card-hidden");
    observer.observe(card);
  });
}

// ── FLIP Transition for Filter Changes ─────────────────────

/**
 * Capture positions of current cards before a DOM change.
 * @param {HTMLElement} container - The grid container
 * @returns {Map<string, DOMRect>} Map of card id → bounding rect
 */
export function capturePositions(container) {
  const positions = new Map();
  const cards = container.querySelectorAll(".resource-card");
  cards.forEach((card) => {
    positions.set(card.dataset.id, card.getBoundingClientRect());
  });
  return positions;
}

/**
 * Animate cards from old positions to new positions (FLIP).
 * Cards that are new will fade in. Cards that moved will animate position.
 * @param {HTMLElement} container
 * @param {Map<string, DOMRect>} oldPositions
 */
export function flipAnimate(container, oldPositions) {
  const cards = container.querySelectorAll(".resource-card");

  cards.forEach((card, index) => {
    const id = card.dataset.id;
    const newRect = card.getBoundingClientRect();

    if (oldPositions.has(id)) {
      // FLIP: animate from old position to new
      const oldRect = oldPositions.get(id);
      const deltaX = oldRect.left - newRect.left;
      const deltaY = oldRect.top - newRect.top;

      if (Math.abs(deltaX) > 1 || Math.abs(deltaY) > 1) {
        card.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        card.style.transition = "none";

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            card.style.transition = `transform ${DURATION}ms ${EASE}`;
            card.style.transform = "";
          });
        });

        // Clean up after animation
        card.addEventListener(
          "transitionend",
          () => {
            card.style.transition = "";
            card.style.transform = "";
          },
          { once: true }
        );
      }
    } else {
      // New card: staggered fade-in
      card.style.opacity = "0";
      card.style.transform = "translateY(16px) scale(0.97)";

      setTimeout(() => {
        card.style.transition = `opacity ${DURATION}ms ${EASE}, transform ${DURATION}ms ${EASE}`;
        card.style.opacity = "1";
        card.style.transform = "translateY(0) scale(1)";

        card.addEventListener(
          "transitionend",
          () => {
            card.style.transition = "";
            card.style.transform = "";
            card.style.opacity = "";
          },
          { once: true }
        );
      }, index * STAGGER);
    }
  });
}

// ── Hero Entrance Animation ─────────────────────────────────

/**
 * Animate the hero section on page load.
 * @param {HTMLElement} heroEl
 */
export function animateHero(heroEl) {
  if (!heroEl) return;
  heroEl.style.opacity = "0";
  heroEl.style.transform = "translateY(32px)";

  requestAnimationFrame(() => {
    heroEl.style.transition = `opacity 800ms ${EASE}, transform 800ms ${EASE}`;
    heroEl.style.opacity = "1";
    heroEl.style.transform = "translateY(0)";
  });
}

// ── Modal Animations ─────────────────────────────────────────

/**
 * Animate modal in.
 * @param {HTMLElement} overlay
 */
export function animateModalIn(overlay) {
  const content = overlay.querySelector(".modal-content");
  overlay.style.display = "flex";

  requestAnimationFrame(() => {
    overlay.classList.add("modal-active");
    if (content) {
      content.style.transform = "scale(0.92) translateY(24px)";
      content.style.opacity = "0";

      requestAnimationFrame(() => {
        content.style.transition = `transform ${DURATION}ms ${EASE}, opacity ${DURATION}ms ${EASE}`;
        content.style.transform = "scale(1) translateY(0)";
        content.style.opacity = "1";
      });
    }
  });
}

/**
 * Animate modal out.
 * @param {HTMLElement} overlay
 * @param {Function} onComplete - Called after animation ends
 */
export function animateModalOut(overlay, onComplete) {
  const content = overlay.querySelector(".modal-content");
  overlay.classList.remove("modal-active");

  if (content) {
    content.style.transition = `transform 300ms ${EASE}, opacity 300ms ${EASE}`;
    content.style.transform = "scale(0.92) translateY(24px)";
    content.style.opacity = "0";
  }

  setTimeout(() => {
    overlay.style.display = "none";
    if (content) {
      content.style.transition = "";
      content.style.transform = "";
      content.style.opacity = "";
    }
    if (onComplete) onComplete();
  }, 300);
}

// ── Tab Switch Animation ─────────────────────────────────────

/**
 * Animate tab indicator transition.
 * @param {HTMLElement} oldTab
 * @param {HTMLElement} newTab
 */
export function animateTabSwitch(oldTab, newTab) {
  if (oldTab) {
    oldTab.style.transition = `background-color ${DURATION}ms ${EASE}, color ${DURATION}ms ${EASE}, transform 200ms ${EASE}`;
    oldTab.classList.remove("tab-active");
  }
  if (newTab) {
    newTab.style.transition = `background-color ${DURATION}ms ${EASE}, color ${DURATION}ms ${EASE}, transform 200ms ${EASE}`;
    newTab.classList.add("tab-active");
    // Micro-interaction: subtle scale pulse
    newTab.style.transform = "scale(1.05)";
    setTimeout(() => {
      newTab.style.transform = "scale(1)";
    }, 200);
  }
}

// ── Subcategory Chips Animation ─────────────────────────────

/**
 * Animate subcategory chips appearing/disappearing.
 * @param {HTMLElement} container
 * @param {boolean} show
 */
export function animateSubcategoryChips(container, show) {
  if (show) {
    container.style.display = "flex";
    container.style.opacity = "0";
    container.style.transform = "translateY(-8px)";
    requestAnimationFrame(() => {
      container.style.transition = `opacity 300ms ${EASE}, transform 300ms ${EASE}`;
      container.style.opacity = "1";
      container.style.transform = "translateY(0)";
    });
  } else {
    container.style.transition = `opacity 200ms ${EASE}, transform 200ms ${EASE}`;
    container.style.opacity = "0";
    container.style.transform = "translateY(-8px)";
    setTimeout(() => {
      container.style.display = "none";
      container.style.transition = "";
    }, 200);
  }
}

// ── Utility: Debounce ────────────────────────────────────────

/**
 * Debounce a function call.
 * @param {Function} fn
 * @param {number} delay - Milliseconds
 * @returns {Function}
 */
export function debounce(fn, delay = 200) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
