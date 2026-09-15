import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";



describe("person", () => {
  test("getAPIKey to return result", () => {
    expect(getAPIKey({
      authorization: "ApiKey abc123"
    })).toBe("abc123");
  });

  test("getAPIKey wrong input", () => {
    expect(getAPIKey({
      "authorization": "wrong key"
    })).toBe(null);
  });

  test("getAPIKey no auth header", () => {
    expect(getAPIKey({
    })).toBe(null);
  });
});
