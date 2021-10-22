import * as fs from "fs/promises";
import { classifyImageFiles, generateBase64Encoding } from "./classifyUtils";
import { encode, isUrlSafeBase64, trim } from "url-safe-base64";
import path from "path";

describe("classifyImageFiles function - Invalid function inputs", () => {
  // Test empty string input into function
  test("it should return invalid input error", async () => {
    return classifyImageFiles("").catch((e) =>
      expect(e).toBe("fileObjectList must be an array of File objects")
    );
  });
  // Test undefined input into function
  test("it should return invalid input error", async () => {
    return classifyImageFiles(undefined).catch((e) =>
      expect(e).toBe("fileObjectList must be an array of File objects")
    );
  });
  // Test null input into function
  test("it should return invalid input error", async () => {
    await expect(classifyImageFiles(null)).rejects.toMatch(
      "fileObjectList must be an array of File objects"
    );
  });
});

describe("classifyImageFiles function - Correct encoding using url-safe-base64 package", () => {
  // Test base64 encoding is Correct
  test("it should be a valid base64 string", async () => {
    const file = await fs.readFile(
      path.resolve(__dirname, "../img/samples/msi1.png"),
      {
        encoding: "base64",
      }
    );
    const string = trim(encode(file));
    expect(isUrlSafeBase64(string)).toBe(true);
  });

  test("it should be an invalid base64 string", () => {
    expect(isUrlSafeBase64("*")).toBe(false);
  });
});

describe("classifyImageFiles function - Correct HTTP PUT request", () => {});

describe("generateBase64Encoding function - Invalid function inputs", () => {
  // Test empty string input into function
  test("it should return invalid input error", async () => {
    return generateBase64Encoding("").catch((e) =>
      expect(e).toBe("File parameter must be a file data URL")
    );
  });
  // Test undefined input into function
  test("it should return invalid input error", async () => {
    return generateBase64Encoding(undefined).catch((e) =>
      expect(e).toBe("File parameter must be a file data URL")
    );
  });
  // Test null input into function
  test("it should return invalid input error", async () => {
    await expect(generateBase64Encoding(null)).rejects.toMatch(
      "File parameter must be a file data URL"
    );
  });
});
