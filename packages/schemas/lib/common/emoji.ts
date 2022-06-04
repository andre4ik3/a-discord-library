import { z } from "../../_deps.ts";
import { Snowflake } from "./misc.ts";
import { User } from "./user.ts";

/**
 * Represents an emoji on Discord.
 * @see https://discord.dev/resources/emoji
 */
export const Emoji = z.object({
  id: Snowflake.nullable(),
  name: z.string().nullable(),
  roles: z.array(Snowflake).optional(),
  user: User.optional(),
  require_colons: z.boolean().optional(),
  managed: z.boolean().optional(),
  animated: z.boolean().optional(),
  available: z.boolean().optional(),
});

export type Emoji = z.infer<typeof Emoji>;
