/** Represents a relative endpoint to the Discord API. */
export type RelativeEndpoint = `/${string}`;

/** Represents a possible request method to the Discord API. */
export type Method = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

/** Represents a possible request method that can have a body. */
export type BodyMethod = "POST" | "PUT" | "PATCH";

/** Represents all methods that do *not* have a body. */
export type BodylessMethod = Omit<Method, BodyMethod>;

/**
 * Gets a resource ID from a URL. The same Resource ID typically shares rate
 * limits, meaning it is possible to know what group of requests will hit the
 * same rate limit before sending.
 * @param url The URL of the request.
 * @returns An identifier for the rate limit. Not the same as the bucket ID.
 * @internal
 */
export function getResourceId(url: RelativeEndpoint) {
  return (
    /\/(?:guilds|channels|webhooks)\/\d{16,19}/g.exec(url)?.at(0) ?? "none"
  );
}
