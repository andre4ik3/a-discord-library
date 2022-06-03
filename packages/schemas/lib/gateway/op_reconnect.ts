import { z } from "../../_deps.ts";

/**
 * Sent by the gateway when it is going away and the client should gracefully
 * reconnect.
 */
export const GatewayOpReconnect = z.object({
  op: z.literal(7),
  /** Indicates whether the session *may* be resumable. */
  d: z.boolean().nullable(),
  s: z.null().optional(),
  t: z.null().optional(),
});

export type GatewayOpReconnect = z.infer<typeof GatewayOpReconnect>;
