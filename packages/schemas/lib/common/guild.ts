import { z } from "../../_deps.ts";
import { Snowflake } from "./misc.ts";

/** Represents possible features that a guild can have. */
export const GuildFeatures = z.enum([
  "ANIMATED_BANNER",
  "ANIMATED_ICON",
  "BANNER",
  "COMMERCE",
  "COMMUNITY",
  "DISCOVERABLE",
  "FEATURABLE",
  "INVITE_SPLASH",
  "MEMBER_VERIFICATION_GATE_ENABLED",
  "MONETIZATION_ENABLED",
  "MORE_STICKERS",
  "NEWS",
  "PARTNERED",
  "PREVIEW_ENABLED",
  "PRIVATE_THREADS",
  "ROLE_ICONS",
  "TICKETED_EVENTS_ENABLED",
  "VANITY_URL",
  "VERIFIED",
  "VIP_REGIONS",
  "WELCOME_SCREEN_ENABLED",
]);
export type GuildFeatures = z.infer<typeof GuildFeatures>;

/** Represents an unavailable Guild in Discord. */
export const UnavailableGuild = z.object({
  /** The ID of the guild. */
  id: Snowflake,
  /** True if outage, false if kicked. */
  unavailable: z.boolean(),
});

export type UnavailableGuild = z.infer<typeof UnavailableGuild>;

export const AvailableGuild = z.object({
  /** The ID of the guild. */
  id: Snowflake,
  /** The name of the guild. */
  name: z.string().min(2).max(100),
  /** Hash of the guild's icon. */
  icon: z.string().nullable(),
  /** Hash of the guild's icon. Returned in template object. */
  icon_hash: z.string().nullable(),
  /** Hash of the guild's splash image. */
  splash: z.string().nullable(),
  /** Hash of the guild's discovery splash. */
  discovery_splash: z.string().nullable(),
  /** True if the current user is owner of the guild. */
  owner: z.boolean().optional(),
  /** The ID of the guild's owner. */
  owner_id: Snowflake,
  permissions: z.string(),
});
