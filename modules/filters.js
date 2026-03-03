// ============================================================
// filters.js — Pure filter/search functions (no DOM dependency)
// ============================================================

/**
 * Filter resources by category, subcategory, search query, and tags.
 * @param {Array} resources - Full resource list
 * @param {Object} criteria
 * @param {string} criteria.category - "all" or category name
 * @param {string} criteria.subcategory - "all" or subcategory name
 * @param {string} criteria.query - Search text
 * @param {string[]} criteria.tags - Active tag filters (AND logic)
 * @returns {Array} Filtered resources
 */
export function filterResources(resources, { category, subcategory, query, tags }) {
  let result = resources;

  // Category filter
  if (category && category !== "all") {
    result = result.filter((r) => r.category === category);
  }

  // Subcategory filter
  if (subcategory && subcategory !== "all") {
    result = result.filter((r) => r.subcategory === subcategory);
  }

  // Tag filter (AND logic — resource must have ALL active tags)
  if (tags && tags.length > 0) {
    result = result.filter((r) =>
      tags.every((tag) => r.tags.includes(tag))
    );
  }

  // Search filter (case-insensitive, matches name + desc + tags)
  if (query && query.trim() !== "") {
    const q = query.toLowerCase().trim();
    result = result.filter((r) => searchMatch(r, q));
  }

  return result;
}

/**
 * Check if a resource matches a search query.
 * Searches name, description, category, subcategory, and tags.
 * @param {Object} resource
 * @param {string} query - Lowercased search string
 * @returns {boolean}
 */
export function searchMatch(resource, query) {
  const haystack = [
    resource.name,
    resource.desc,
    resource.category,
    resource.subcategory,
    ...resource.tags,
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query);
}

/**
 * Extract unique sorted categories from resources.
 * @param {Array} resources
 * @returns {string[]}
 */
export function getCategories(resources) {
  const cats = new Set(resources.map((r) => r.category));
  return [...cats].sort();
}

/**
 * Extract unique sorted subcategories for a given category.
 * @param {Array} resources
 * @param {string} category
 * @returns {string[]}
 */
export function getSubcategories(resources, category) {
  if (!category || category === "all") return [];
  const subs = new Set(
    resources
      .filter((r) => r.category === category && r.subcategory)
      .map((r) => r.subcategory)
  );
  return [...subs].sort();
}

/**
 * Extract all unique tags from resources.
 * @param {Array} resources
 * @returns {string[]}
 */
export function getAllTags(resources) {
  const tags = new Set(resources.flatMap((r) => r.tags));
  return [...tags].sort();
}
