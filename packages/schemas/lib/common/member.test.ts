import { assertEquals } from "test/asserts.ts";
import { describe, it } from "test/bdd.ts";
import { Member } from "./member.ts";
import { member } from "../../test_data.ts";

describe("Guild", () => {
  it("can parse a valid member", () => {
    // @ts-expect-error: readonly mismatch
    assertEquals(Member.parse(member.data), member.data);
  });
});
