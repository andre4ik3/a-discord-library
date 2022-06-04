import { z } from "../../_deps.ts";
import { Snowflake, Permissions, HexColor } from "./misc.ts";

/**
 * Represents a role that's part of a guild.
 * @see https://discord.dev/topics/permissions#role-object
 */
export const Role = z.object({
  id: Snowflake,
  name: z.string(),
  color: HexColor,
  hoist: z.boolean(),
  icon: z.string().nullish(),
  unicode_emoji: z.string().length(1).nullish(),
  position: z.number().int().positive(),
  permissions: Permissions,
  managed: z.boolean(),
  mentionable: z.boolean(),
  tags: z
    .object({
      bot_id: Snowflake.optional(),
      integration_id: Snowflake.optional(),
      premium_subscriber: z.null().optional(),
    })
    .optional(),
});

export type Role = z.infer<typeof Role>;
