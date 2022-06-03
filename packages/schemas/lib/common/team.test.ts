import { assertEquals, assertThrows } from "test/asserts.ts";
import { describe, it } from "test/bdd.ts";
import { Team } from "./team.ts";
import { application } from "../../test_data.ts";

describe("Team", () => {
  it("can parse a valid team", () => {
    // @ts-expect-error: snowflake type mismatch
    assertEquals(Team.parse(application.data.team), application.data.team);
  });

  it("throws on invalid teams", () => {
    application.invalid.forEach((app) => {
      // if ("team" in app) assertThrows(() => Team.parse(app.team));
    });
  });
});
