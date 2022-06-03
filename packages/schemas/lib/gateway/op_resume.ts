import { z } from "../../_deps.ts";

/** Used to replay missed events when a disconnected client resumes. */
export const GatewayOpResume = z.object({
  op: z.literal(6),
  d: z.object({
    /** The token of the bot. */
    token: z.string(),
    /** The session ID of the previous session. */
    session_id: z.string(),
    /** The last sequence number that was received. */
    seq: z.number().int(),
  }),
  s: z.null().optional(),
  t: z.null().optional(),
});

export type GatewayOpResume = z.infer<typeof GatewayOpResume>;
