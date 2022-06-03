import { assert } from "test/asserts.ts";
import { describe, it, beforeEach } from "test/bdd.ts";
import { Queue, QueueInit } from "./queue.ts";
import { delay } from "../../deps.ts";

describe("queue", () => {
  let queue: Queue;
  const getQueue = (c?: QueueInit) => new Queue(c);
  beforeEach(() => void (queue = getQueue()));

  it("instantiates correctly", () => {
    assert(queue["tasks"].length === 0);
    assert(queue["isTicking"] === false);
  });

  it("runs items in order", async () => {
    let currentFunc = 0;

    await Promise.all([
      queue.wait(() => {
        currentFunc++;
        assert(currentFunc === 1);
        return Promise.resolve();
      }),
      queue.wait(() => {
        currentFunc++;
        assert(currentFunc === 2);
        return Promise.resolve();
      }),
      queue.wait(() => {
        currentFunc++;
        assert(currentFunc === 3);
        return Promise.resolve();
      }),
    ]);
  });

  it("can wait a delay", async () => {
    const queue = getQueue({ delay: 500 });
    const time = performance.now();

    await queue.wait(() => Promise.resolve());
    await queue.wait(() => Promise.resolve());

    const timeDiff = performance.now() - time;

    // 10ms jitter
    assert(timeDiff >= 500);
    assert(timeDiff <= 510);

    await delay(600); // dont leak async ops
  });

  it("can wait for a promise with a delay", async () => {
    const queue = getQueue({ delay: 500 });
    const time = performance.now();

    await queue.wait(() => delay(1000));
    await queue.wait(() => Promise.resolve());

    const timeDiff = performance.now() - time;

    // 10ms jitter
    assert(timeDiff >= 1000);
    assert(timeDiff <= 1010);

    await delay(600); // dont leak async ops
  });
});
