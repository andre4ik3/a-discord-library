import { assertEquals, assertThrows } from "test/asserts.ts";
import { describe, it } from "test/bdd.ts";
import { User } from "./user.ts";
import { user } from "../../test_data.ts";

describe("User", () => {
  it("can parse a valid user", () => {
    assertEquals(User.parse(user.data), user.data);
  });

  it("throws on invalid users", () => {
    user.invalid.forEach((usr) => assertThrows(() => User.parse(usr)));
  });
});
