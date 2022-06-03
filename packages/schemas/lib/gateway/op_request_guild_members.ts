import { z } from "../../_deps.ts";
import { Snowflake } from "../common/misc.ts";

/** A request made to fetch chunks of guild members. */
export const GatewayOpRequestGuildMembers = z.object({
  op: z.literal(8),
  d: z.object({
    /** The target Guild ID of whose members to retrieve. */
    guild_id: Snowflake,
    /** String that the username stards with, or empty string to get all. */
    query: z.string().optional(),
    /** Maximum number of members to send matching the query. */
    limit: z.number().int(),
    /** If true, retrieves members with the presences. */
    presences: z.boolean().optional(),
    /** Used to specify which users to retrieve. */
    user_ids: z.union([Snowflake, z.array(Snowflake)]).optional(),
    /** Nonce to identify the guild members chunk response. */
    nonce: z.string().max(32).optional(),
  }),
  s: z.null().optional(),
  t: z.null().optional(),
});

export type GatewayOpRequestGuildMembers = z.infer<
  typeof GatewayOpRequestGuildMembers
>;
