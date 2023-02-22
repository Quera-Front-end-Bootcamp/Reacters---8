const setItem = (key, value) => {
  localStorage.setItem(key, value);
};

const getItem = (key) => {
  return localStorage.getItem(key) || false;
};

const removeItem = (key) => {
  return getItem(key) === false ? false : localStorage.removeItem(key);
};

const clearStorage = () => {
  localStorage.clear();
};

export { setItem, getItem, removeItem, clearStorage };
