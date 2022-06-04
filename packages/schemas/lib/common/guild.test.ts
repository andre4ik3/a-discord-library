import { assertEquals } from "test/asserts.ts";
import { describe, it } from "test/bdd.ts";
import { Guild } from "./guild.ts";
import { guild } from "../../test_data.ts";

describe("Guild", () => {
  it("can parse a valid guild", () => {
    // @ts-expect-error: readonly mismatch
    assertEquals(Guild.parse(guild.full), guild.full);
    assertEquals(Guild.parse(guild.unavailable), guild.unavailable);
  });
});
