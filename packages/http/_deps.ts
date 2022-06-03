// std lib
export * from "https://deno.land/std@0.141.0/async/deferred.ts";
export { delay } from "https://deno.land/std@0.141.0/async/delay.ts";

// deno.land/x, updated automatically
export { EventEmitter } from "https://deno.land/x/event_emitter@1.0.0/mod.ts";

// npm
import ms from "https://cdn.skypack.dev/ms@2.1.3?dts";
import pako from "https://cdn.skypack.dev/pako@2.0.4?dts";
export { ms, pako };
