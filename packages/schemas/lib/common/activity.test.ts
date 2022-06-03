import { assertEquals, assertThrows } from "test/asserts.ts";
import { describe, it } from "test/bdd.ts";
import { Activity } from "./activity.ts";
import { activity } from "../../test_data.ts";

describe("Activity", () => {
  it("can parse a valid activity", () => {
    // @ts-expect-error: snowflake type mismatch
    assertEquals(Activity.parse(activity.rich), activity.rich);
    assertEquals(Activity.parse(activity.simple), activity.simple);
  });

  it("throws on invalid activities", () => {
    activity.invalid.forEach((act) => {
      assertThrows(() => Activity.parse(act));
    });
  });
});
