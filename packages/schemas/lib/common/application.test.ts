import { assertEquals, assertThrows } from "test/asserts.ts";
import { describe, it } from "test/bdd.ts";
import { Application } from "./application.ts";
import { application } from "../../test_data.ts";

describe("Application", () => {
  it("can parse a valid application", () => {
    // @ts-expect-error: snowflake type mismatch
    assertEquals(Application.parse(application.data), application.data);
  });

  it("throws on invalid applications", () => {
    application.invalid.forEach((app) => {
      assertThrows(() => Application.parse(app));
    });
  });
});
