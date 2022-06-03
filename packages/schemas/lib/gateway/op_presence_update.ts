import { z } from "../../_deps.ts";
import { Activity, Status } from "../common/activity.ts";

/** Sent by the client to update the activity. */
export const GatewayOpPresenceUpdate = z.object({
  op: z.literal(3),
  d: z.object({
    /** Unix Timestamp (ms) of when the client went idle. Null if not idle. */
    since: z.number().int().nullable(),
    /** Array of activity objects. */
    activities: z.array(Activity),
    /** The user's new status. */
    status: Status,
    /** Whether or not the user is AFK. */
    afk: z.boolean(),
  }),
  s: z.null().optional(),
  t: z.null().optional(),
});

export type GatewayOpPresenceUpdate = z.infer<typeof GatewayOpPresenceUpdate>;
