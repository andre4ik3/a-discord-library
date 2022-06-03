import { z } from "../../_deps.ts";
import { Snowflake } from "./misc.ts";
import { User } from "./user.ts";

/** Represents an emoji on Discord. */
export const Emoji = z.object({
  /** The ID of the emoji. Null if not custom. */
  id: Snowflake.nullable(),
  /** The name of the emoji. Can only be null in reaction emojis. */
  name: z.string().nullable(),
  /** The roles that are permitted to use this emoji. */
  roles: z.array(Snowflake).optional(),
  /** The user that created this emoji. */
  user: User.optional(),
  /** Whether this emoji must be wrapped in colons. */
  require_colons: z.boolean().optional(),
  /** Whether this emoji is managed by an integration. */
  managed: z.boolean().optional(),
  /** Whether this emoji is animated. */
  animated: z.boolean().optional(),
  /** Whether this emoji can be used. May be false due to guild outage. */
  available: z.boolean().optional(),
});

export type Emoji = z.infer<typeof Emoji>;
