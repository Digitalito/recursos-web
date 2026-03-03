// ============================================================
// state.js — Global state store with pub/sub
// ============================================================

const listeners = {};

export const state = {
  allResources: [],
  filtered: [],
  category: "all",
  subcategory: "all",
  searchQuery: "",
  activeTags: [],
  modalResource: null,
};

/**
 * Subscribe to a state event.
 * @param {string} event - Event name
 * @param {Function} callback - Handler function
 * @returns {Function} Unsubscribe function
 */
export function subscribe(event, callback) {
  if (!listeners[event]) listeners[event] = [];
  listeners[event].push(callback);
  return () => {
    listeners[event] = listeners[event].filter((cb) => cb !== callback);
  };
}

/**
 * Emit a state event to all subscribers.
 * @param {string} event - Event name
 * @param {*} data - Data to pass to handlers
 */
export function emit(event, data) {
  if (!listeners[event]) return;
  listeners[event].forEach((cb) => cb(data));
}

/**
 * Update state and emit the corresponding event.
 * @param {string} key - State key to update
 * @param {*} value - New value
 */
export function setState(key, value) {
  state[key] = value;
  emit(`${key}-changed`, value);
}

/**
 * Batch update multiple state keys, emitting a single 'state-changed' event.
 * @param {Object} updates - Key/value pairs to update
 */
export function batchUpdate(updates) {
  Object.entries(updates).forEach(([key, value]) => {
    state[key] = value;
  });
  emit("state-changed", state);
}
