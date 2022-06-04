import { assertEquals } from "test/asserts.ts";
import { describe, it } from "test/bdd.ts";
import { Emoji } from "./emoji.ts";
import { emoji } from "../../test_data.ts";

describe("Emoji", () => {
  it("can parse a valid emoji", () => {
    // @ts-expect-error: snowflake type mismatch
    assertEquals(Emoji.parse(emoji.full), emoji.full);
    assertEquals(Emoji.parse(emoji.standard), emoji.standard);
    assertEquals(Emoji.parse(emoji.custom), emoji.custom);
    assertEquals(Emoji.parse(emoji.animated), emoji.animated);
  });
});
