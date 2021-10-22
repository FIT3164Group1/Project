export const getFilenameFromURL = function (url) {
  try {
    return new URL(url).pathname.split("/").pop();
  } catch (e) {
    console.error(e);
  }
};

export function getLocalStorage(key, initialValue) {
  if (key === "" || typeof key == "undefined" || key === null) {
    throw "Key parameter must be a valid string";
  }
  if (
    initialValue === "" ||
    typeof initialValue == "undefined" ||
    initialValue === null
  ) {
    throw "initialValue parameter must be a valid string";
  }
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  } catch (e) {
    // if error, return initial value
    return initialValue;
  }
}
export function setLocalStorage(key, value) {
  if (key === "" || typeof key == "undefined" || key === null) {
    throw "Key parameter must be a valid string";
  }
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // catch possible errors:
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
  }
}
