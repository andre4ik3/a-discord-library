import { assert } from "test/asserts.ts";
import { describe, it } from "test/bdd.ts";
import { getResourceId } from "./request.ts";

/** A fake ID for testing that is length-compliant. */
const ID = "1234567890123456";

describe("request", () => {
  describe("getResourceId", () => {
    it("can get a resource id for a guild route", () => {
      assert(getResourceId(`/guilds/${ID}`) === `/guilds/${ID}`);
    });

    it("can get a resource id for a channel route", () => {
      assert(getResourceId(`/channels/${ID}`) === `/channels/${ID}`);
    });

    it("can get a resource id for a webhook route", () => {
      assert(getResourceId(`/webhooks/${ID}`) === `/webhooks/${ID}`);
    });

    it("strips out unrelated parts of the URL", () => {
      assert(getResourceId(`/guilds/${ID}/some/route`) === `/guilds/${ID}`);
    });
  });
});
