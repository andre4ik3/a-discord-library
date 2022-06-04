import { z } from "../../_deps.ts";
import { Role } from "./role.ts";
import { Emoji } from "./emoji.ts";
import { Snowflake, Permissions, Locale } from "./misc.ts";

/**
 * Represents possible features that a guild can have.
 * @see https://discord.dev/resources/guild#guild-object-guild-features
 */
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

enum _DefaultNotificationLevel {
  ALL_MESSAGES = 0,
  ONLY_MENTIONS = 1,
}

export const DefaultNotificationLevel = z.nativeEnum(_DefaultNotificationLevel);
export type DefaultNotificationLevel = z.infer<typeof DefaultNotificationLevel>;

enum _ExplicitFilterLevel {
  DISABLED = 0,
  MEMBERS_WITHOUT_ROLES = 1,
  ALL_MEMBERS = 2,
}

export const ExplicitFilterLevel = z.nativeEnum(_ExplicitFilterLevel);
export type ExplicitFilterLevel = z.infer<typeof ExplicitFilterLevel>;

enum _MFALevel {
  NONE = 0,
  ELEVATED = 1,
}

export const MFALevel = z.nativeEnum(_MFALevel);
export type MFALevel = z.infer<typeof MFALevel>;

enum _GuildVerificationLevel {
  NONE = 0,
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
  VERY_HIGH = 4,
}

export const GuildVerificationLevel = z.nativeEnum(_GuildVerificationLevel);
export type GuildVerificationLevel = z.infer<typeof GuildVerificationLevel>;

enum _GuildNSFWLevel {
  DEFAULT = 0,
  EXPLICIT = 1,
  SAFE = 2,
  AGE_RESTRICTED = 3,
}

export const GuildNSFWLevel = z.nativeEnum(_GuildNSFWLevel);
export type GuildNSFWLevel = z.infer<typeof GuildNSFWLevel>;

enum _GuildPremiumTier {
  NONE = 0,
  TIER_1 = 1,
  TIER_2 = 2,
  TIER_3 = 3,
}

export const GuildPremiumTier = z.nativeEnum(_GuildPremiumTier);
export type GuildPremiumTier = z.infer<typeof GuildPremiumTier>;

/**
 * Represents an unavailable guild in Discord.
 * @see https://discord.dev/resources/guild#unavailable-guild-object
 */
export const UnavailableGuild = z.object({
  id: Snowflake,
  unavailable: z.boolean(),
});

export type UnavailableGuild = z.infer<typeof UnavailableGuild>;

/**
 * Represents an available guild in Discord.
 * @see https://discord.dev/resources/guild
 */
export const AvailableGuild = z.object({
  id: Snowflake,
  name: z.string().min(2).max(100),
  icon: z.string().nullable(),
  icon_hash: z.string().nullable(),
  splash: z.string().nullable(),
  discovery_splash: z.string().nullable(),
  owner: z.boolean().optional(),
  owner_id: Snowflake,
  permissions: Permissions.optional(),
  /** @deprecated */
  region: z.string().nullish(),
  afk_channel_id: Snowflake.nullable(),
  afk_timeout: z.number().int(),
  widget_enabled: z.boolean().optional(),
  widget_channel_id: Snowflake.nullish(),
  verification_level: GuildVerificationLevel,
  default_message_notifications: DefaultNotificationLevel,
  explicit_content_filter: ExplicitFilterLevel,
  roles: z.array(Role),
  emojis: z.array(Emoji),
  features: z.array(GuildFeatures),
  mfa_level: MFALevel,
  application_id: Snowflake.nullable(),
  system_channel_id: Snowflake.nullable(),
  system_channel_flags: z.number().int(),
  rules_channel_id: Snowflake.nullable(),
  max_presences: z.number().nullish(),
  max_members: z.number().optional(),
  vanity_url_code: z.string().nullable(),
  description: z.string().nullable(),
  banner: z.string().nullable(),
  premium_tier: GuildPremiumTier,
  premium_subscription_count: z.number().int().optional(),
  preferred_locale: Locale.default("en-US"),
  public_updates_channel_id: Snowflake.nullable(),
  max_video_channel_users: z.number().optional(),
  approximate_member_count: z.number().optional(),
  approximate_presence_count: z.number().optional(),
  welcome_screen: z.unknown().optional(), // TODO
  nsfw_level: GuildNSFWLevel,
  stickers: z.array(z.unknown()).optional(),
  premium_progress_bar_enabled: z.boolean(),
});

export type AvailableGuild = z.infer<typeof AvailableGuild>;

/** Represents a guild in Discord. */
export const Guild = z.union([UnavailableGuild, AvailableGuild]);
export type Guild = z.infer<typeof Guild>;

declare const guild: Guild;
