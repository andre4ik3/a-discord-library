import { z } from "../../_deps.ts";

/** An acknowledgement of the last heartbeat, from the server. */
export const GatewayOpHeartbeatAck = z.object({
  op: z.literal(11),
  d: z.null().optional(),
  s: z.null().optional(),
  t: z.null().optional(),
});

export type GatewayOpHeartbeatAck = z.infer<typeof GatewayOpHeartbeatAck>;
