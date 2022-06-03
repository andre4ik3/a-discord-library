import {
  type Method,
  type BodyMethod,
  type BodylessMethod,
  type RelativeEndpoint as RE,
  getResourceId,
} from "../util/request.ts";
import { Queue } from "../util/queue.ts";
import { ms } from "../../_deps.ts";

/** Keep track of per-IP rate limits globally */
let invalidRequests = 0;

/** The global amount of requests allowed from the bot per second. */
const GLOBAL_RATE_LIMIT = 50 / ms("1 second");

/** Represents the base options for initializing the Discord API client. */
export interface DiscordAPIBaseInitOptions {}

/**
 * Represents the base class for Discord APIs.
 * Each API version will extend the last, and the earliest API version extends
 * this class, which consists mostly of utility methods and no actual
 * routes.
 * @abstract
 * @internal
 */
export abstract class DiscordAPIBase {
  /** The global queue for requests. */
  private globalQueue = new Queue({ delay: GLOBAL_RATE_LIMIT });

  /** The sub-ratelimit buckets, mapped by ID to queue. */
  private buckets = new Map<string, Queue>();

  /**
   * Builds a request object before it is sent off to Discord.
   * @param url The URL to request
   * @param method The method of the request
   * @param body The body of the request.
   * @returns A built request with the URL, method, and other things.
   */
  private buildRequest(url: RE, method: BodyMethod, body: BodyInit): Request;
  private buildRequest(url: RE, method: BodylessMethod): Request;
  private buildRequest(url: RE, method: Method, body?: BodyInit) {
    const headers = new Headers();
    // This string is frozen to avoid exposing any extra info about the bot.
    // TODO: replace with actual name, maybe add server runtime?
    headers.append("User-Agent", "thing-http/1.0");
    headers.set("Accept", "application/json");
    return new Request(url, { method, headers, body, keepalive: true });
  }

  /**
   * Places a request in the queue and returns the response
   * @param req The request to perform.
   * @deprecated
   */
  private async runRequest(req: Request) {}
}
