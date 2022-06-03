import { assert } from "test/asserts.ts";
import { describe, it } from "test/bdd.ts";
import { getRuntimeUserAgent } from "./misc.ts";

describe("misc", () => {
  describe("getRuntimeUserAgent", () => {
    it("gets the runtime version correctly", () => {
      assert(getRuntimeUserAgent() === `Deno/${Deno.version.deno}`);
    });
  });
});
