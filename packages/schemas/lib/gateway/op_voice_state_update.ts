import { z } from "../../_deps.ts";
import { Snowflake } from "../common/misc.ts";

/** Sent by the client to update the voice state.  */
export const GatewayOpVoiceStateUpdate = z.object({
  op: z.literal(4),
  d: z.object({
    /** ID of the guild. */
    guild_id: Snowflake,
    /** ID of the channel to join (null to disconnect). */
    channel_id: Snowflake.nullable(),
    /** True if the client is self-muted. */
    self_mute: z.boolean(),
    /** True if the client is self-deafened. */
    self_deaf: z.boolean(),
  }),
  s: z.null().optional(),
  t: z.null().optional(),
});

export type GatewayOpVoiceStateUpdate = z.infer<
  typeof GatewayOpVoiceStateUpdate
>;
