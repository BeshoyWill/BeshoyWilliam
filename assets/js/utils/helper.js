// --- change Active
export function changeActive(items, elemnt) {
  items.forEach((item) => item.classList.remove("active")); // items loop to remove active
  elemnt.classList.add("active"); // element to add active
}

// ---- set local storage
export function setStorage(key, value) {
  localStorage.setItem(key, value);
}

export function getStorage(key) {
  return localStorage.getItem(key);
}

/* 
// Set item in localStorage
export function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Get item from localStorage
export function getLocalStorage(key) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

// Remove item from localStorage
export function removeLocalStorage(key) {
  localStorage.removeItem(key);
}
 */
