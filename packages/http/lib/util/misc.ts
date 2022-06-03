// Quick and dirty definition for node process global with version only
declare const process: { versions: { node: string } };

/**
 * Gets the user-agent of the current runtime.
 * Currently supports Deno and Node.
 * If it returns undefined, user-agent should not be overriden.
 * @returns Server-side runtime user-agent string, or undefined.
 */
export function getRuntimeUserAgent() {
  // Deno
  if (typeof Deno !== "undefined" && "version" in Deno)
    return `Deno/${Deno.version.deno}`;

  // Node.JS
  if (typeof process !== "undefined" && "versions" in process)
    return `Node/${process.versions.node}`;
}
