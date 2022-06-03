import { assert, assertThrows } from "test/asserts.ts";
import { describe, it } from "test/bdd.ts";
import { Snowflake, Locale, Permissions } from "./misc.ts";

describe("Snowflake", () => {
  it("can parse a valid snowflake", () => {
    const data = Snowflake.parse("406856161015627835");
    assert(data === "406856161015627835");
  });

  it("throws on invalid snowflakes", () => {
    assertThrows(() => Snowflake.parse("123456789012345")); // too short
    assertThrows(() => Snowflake.parse("12345678901234567890")); // too long
    assertThrows(() => Snowflake.parse("406856161015627835n")); // regex fail
    assertThrows(() => Snowflake.parse("not_even_remotely_a_snowflake"));
  });
});

describe("Permissions", () => {
  it("can parse a valid permissions bitfield", () => {
    assert(Permissions.parse("2112") === "2112");
  });

  it("throws on invalid permission bitfields", () => {
    assertThrows(() => Permissions.parse("abcd"));
    assertThrows(() => Permissions.parse(2112));
  });
});

describe("Locale", () => {
  it("can parse a valid locale", () => {
    assert(Locale.parse("en-US") === "en-US");
    assert(Locale.parse("ru") === "ru");
  });

  it("throws on invalid locales", () => {
    assertThrows(() => Locale.parse("not-a-locale"));
    assertThrows(() => Locale.parse("br-UH"));
  });
});
