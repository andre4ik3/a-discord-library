import { z } from "../../_deps.ts";

/** A gateway heartbeat that keeps the connection alive. */
export const GatewayOpHeartbeat = z.object({
  op: z.literal(1),
  /** The last sequence number - s - received by the client.  */
  d: z.number().nullable(),
  s: z.null().optional(),
  t: z.null().optional(),
});

export type GatewayOpHeartbeat = z.infer<typeof GatewayOpHeartbeat>;
