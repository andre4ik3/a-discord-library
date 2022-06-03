import { Deferred, deferred, delay, EventEmitter } from "../../_deps.ts";

/** Configuration options for a queue. */
export interface QueueInit {
  /**
   * If set to a non-zero value, the delay in milliseconds between doing each
   * promise. Note that it works in conjunction with the waitForPromises option,
   * e.g. if delay is 500ms and promise waits for 900ms, next one will go after
   * the 900ms. If it resolves instantly, next one will go after 500ms (delay).
   *
   * @default 0
   */
  delay?: number;

  /**
   * Whether or not to wait for a promise to resolve before going ahead with
   * the next one. Note that delay will still function, it will just work as if
   * each promise resolves instantly.
   *
   * @default true
   */
  waitForPromises?: boolean;
}

/** An asynchronous queue for promises. */
export class Queue {
  /** The *effective* configuration of the queue. */
  private readonly config: Required<QueueInit>;

  /** Internal event emitter for syncing up deferred and actual promises. */
  private events = new EventEmitter<{ done: () => void }>();

  /** True if the queue is currently ticking (processing items). */
  private isTicking = false;

  /** The tasks (or "tickets") in the queue. */
  private tasks = new Array<Deferred<void>>();

  public constructor(config?: QueueInit) {
    this.config = { delay: 0, waitForPromises: true, ...config };
  }

  /** Waits for the current promise to be done. */
  private async waitUntilDone() {
    return await new Promise<void>((res) => this.events.once("done", res));
  }

  /** Processes the next item in the queue. Resolves when done. */
  private async tick() {
    if (!this.isTicking) return;
    const task = this.tasks.shift();
    if (!task) return;

    return await new Promise<void>((res) => {
      // Create a promise that resolves when the delay (if any) has completed
      const delayPromise = this.config.delay
        ? delay(this.config.delay)
        : Promise.resolve();

      task.resolve(); // This allows the promise in queue to run

      if (this.config.waitForPromises) {
        // Wait until the promise is done and then wait out the delay, if any
        this.waitUntilDone()
          .then(() => delayPromise)
          .then(res);
      } else if (this.config.delay) {
        // Wait out the delay
        delayPromise.then(res);
      } else res(); // no delay or promise wait setting
    });
  }

  /** Runs a tick for each queue item that is *currently* in queue. */
  private async tickAll() {
    this.isTicking = true;
    while (this.tasks.length > 0) await this.tick();
    this.isTicking = false;
  }

  /** Ensures that the queue is ticking. Called after each push. */
  private async ensureTicking() {
    if (!this.isTicking) await this.tickAll();
  }

  /**
   * Adds an item to the queue. The callback will be ran after it's the item's
   * turn in the queue, and the result will be returned back to the executing
   * function.
   *
   * @param callback - The callback to run after it's the task's turn in queue.
   * @returns The result of the callback after it was ran.
   */
  public async wait<T>(callback: () => Promise<T>): Promise<T> {
    const task = deferred<void>();
    this.tasks.push(task);
    this.ensureTicking();

    return await task.then(callback).then((result) => {
      if (this.config.waitForPromises) this.events.emit("done");
      return result;
    });
  }
}
