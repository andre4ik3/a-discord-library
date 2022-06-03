// This file contains common polyfills for Node.JS.
import { ShimOptions } from "https://deno.land/x/dnt@0.23.0/mod.ts";

/** Custom shim type from dnt. */
type Shim = ShimOptions["custom"] extends (infer T)[] | undefined ? T : never;

/** Fetch API in Node */
export const shimFetch: Shim = {
  package: { name: "node-fetch", version: "^3.2.4" },
  globalNames: [
    { name: "fetch", exportName: "default" },
    { name: "RequestInit", typeOnly: true },
    "Blob",
    "File",
    "Request",
    "Response",
    "FormData",
    "Headers",
  ],
};

/** Browser WebSocket class for Node */
export const shimWebSocket: Shim = {
  package: { name: "ws", version: "^8.7.0" },
  typesPackage: { name: "@types/ws", version: "^8.5.3" },
  globalNames: [{ name: "WebSocket", exportName: "default" }],
};

/** AbortController and AbortSignal shim for Node */
export const shimAbortController: Shim = {
  package: { name: "abort-controller", version: "^3.0.0" },
  globalNames: ["AbortController", "AbortSignal"],
};
