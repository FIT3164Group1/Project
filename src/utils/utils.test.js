import { getFilenameFromURL, getLocalStorage, setLocalStorage } from "./utils";

describe("getFilenameFromURL function - Strip filename from URL", () => {
  test("it should return a valid filename from a valid URL string", () => {
    return expect(
      getFilenameFromURL(
        "https://github.com/FIT3164Group1/Project/blob/gh-pages/images/msi1.png"
      )
    ).toBe("msi1.png");
  });
  test("it should return a valid filename from an invalid URL string", () => {
    return expect(
      getFilenameFromURL(
        "https://_~github.com/FIT3164Group1*Project/blob/gh-pages/images/msi1.png"
      )
    ).toBe("msi1.png");
  });

  test("it should return an empty string when no filepath exists within the URL", () => {
    return expect(
      getFilenameFromURL("https://github.com/FIT3164Group1/Project/")
    ).toBe("");
  });
});

describe("getLocalStorage function - Invalid function inputs", () => {
  // Test empty string input into function
  test("it should return invalid input error", () => {
    return expect(() => getLocalStorage("", "sample")).toThrow(
      "Key parameter must be a valid string"
    );
  });
  // Test undefined input into function
  test("it should return invalid input error", () => {
    return expect(() => getLocalStorage(undefined, "sample")).toThrow(
      "Key parameter must be a valid string"
    );
  });
  // Test null input into function
  test("it should return invalid input error", async () => {
    return expect(() => getLocalStorage(null, "sample")).toThrow(
      "Key parameter must be a valid string"
    );
  });

  // Test empty string input into function
  test("it should return invalid input error", () => {
    return expect(() => getLocalStorage("sample", "")).toThrow(
      "initialValue parameter must be a valid string"
    );
  });
  // Test undefined input into function
  test("it should return invalid input error", () => {
    return expect(() => getLocalStorage("sample", undefined)).toThrow(
      "initialValue parameter must be a valid string"
    );
  });
  // Test null input into function
  test("it should return invalid input error", async () => {
    return expect(() => getLocalStorage("sample", null)).toThrow(
      "initialValue parameter must be a valid string"
    );
  });
});

describe("setLocalStorage function - Invalid function inputs", () => {
  // Test empty string input into function
  test("it should return invalid input error", () => {
    return expect(() => setLocalStorage("", "sample")).toThrow(
      "Key parameter must be a valid string"
    );
  });
  // Test undefined input into function
  test("it should return invalid input error", () => {
    return expect(() => setLocalStorage(undefined, "sample")).toThrow(
      "Key parameter must be a valid string"
    );
  });
  // Test null input into function
  test("it should return invalid input error", async () => {
    return expect(() => setLocalStorage(null, "sample")).toThrow(
      "Key parameter must be a valid string"
    );
  });
});
