import { z } from "../../_deps.ts";

/** The first thing sent over the Gateway. Contains heartbeat interval. */
export const GatewayOpHello = z.object({
  op: z.literal(10),
  d: z.object({
    /** The interval (in milliseconds) the client should heartbeat with. */
    heartbeat_interval: z.number(),
  }),
  s: z.null().optional(),
  t: z.null().optional(),
});

export type GatewayOpHello = z.infer<typeof GatewayOpHello>;
