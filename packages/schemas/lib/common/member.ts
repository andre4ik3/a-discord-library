import { z } from "../../_deps.ts";
import { User } from "./user.ts";
import { Snowflake, Permissions } from "./misc.ts";

/**
 * Represents a member of a guild in Discord.
 * @see https://discord.dev/resources/guild#guild-member-object
 */
export const Member = z.object({
  user: User.optional(),
  nick: z.string().nullish(),
  avatar: z.string().nullish(),
  roles: z.array(Snowflake),
  joined_at: z.string(),
  premium_since: z.string().nullish(),
  deaf: z.boolean(),
  mute: z.boolean(),
  pending: z.boolean().optional(),
  permissions: Permissions.optional(),
  communication_disabled_until: z.string().nullish(),
});

export type Member = z.infer<typeof Member>;
