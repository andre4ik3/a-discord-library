import { z } from "../../_deps.ts";

/** The gateway payload for when an event was dispatched. */
export const GatewayOpDispatch = z.object({
  op: z.literal(0),
  /** The data of the event. */
  d: z.object({}),
  /** The sequence number. */
  s: z.number().int(),
  /** The event name of the payload. */
  t: z.string(),
});

export type GatewayOpDispatch = z.infer<typeof GatewayOpDispatch>;
