import {
  filterValidImages,
  getUploadedFileDimensions,
  isValidImage,
} from "./imageUtils";

describe("isValidImage function - Invalid function inputs", () => {
  // Test empty string input into function
  test("it should return invalid input error", async () => {
    return isValidImage("").catch((e) =>
      expect(e).toBe("File parameter must contain a File object")
    );
  });
  // Test undefined input into function
  test("it should return invalid input error", async () => {
    return isValidImage(undefined).catch((e) =>
      expect(e).toBe("File parameter must contain a File object")
    );
  });
  // Test null input into function
  test("it should return invalid input error", async () => {
    await expect(isValidImage(null)).rejects.toMatch(
      "File parameter must contain a File object"
    );
  });
});

describe("getUploadedFileDimensions function - Invalid function inputs", () => {
  // Test empty string input into function
  test("it should return invalid input error", async () => {
    return getUploadedFileDimensions("").catch((e) =>
      expect(e).toBe("File parameter must contain a File object")
    );
  });
  // Test undefined input into function
  test("it should return invalid input error", async () => {
    return getUploadedFileDimensions(undefined).catch((e) =>
      expect(e).toBe("File parameter must contain a File object")
    );
  });
  // Test null input into function
  test("it should return invalid input error", async () => {
    await expect(getUploadedFileDimensions(null)).rejects.toMatch(
      "File parameter must contain a File object"
    );
  });
});

describe("filterValidImages function - Invalid function inputs", () => {
  // Test empty string input into function
  test("it should return invalid input error", async () => {
    return filterValidImages("").catch((e) =>
      expect(e).toBe("File parameter must contain an array of File objects")
    );
  });
  // Test undefined input into function
  test("it should return invalid input error", async () => {
    return filterValidImages(undefined).catch((e) =>
      expect(e).toBe("File parameter must contain an array of File objects")
    );
  });
  // Test null input into function
  test("it should return invalid input error", async () => {
    await expect(filterValidImages(null)).rejects.toMatch(
      "File parameter must contain an array of File objects"
    );
  });
});
