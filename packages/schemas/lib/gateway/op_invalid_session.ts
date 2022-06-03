import { z } from "../../_deps.ts";

/** Received when a session has been invalidated. */
export const GatewayOpInvalidSession = z.object({
  op: z.literal(9),
  /** True if the session _may_ be able to be resumed. */
  d: z.boolean().nullable(),
  s: z.null().optional(),
  t: z.null().optional(),
});

export type GatewayOpInvalidSession = z.infer<typeof GatewayOpInvalidSession>;
