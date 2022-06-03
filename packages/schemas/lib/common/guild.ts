import { z } from "../../_deps.ts";
import { Snowflake, Permissions, Locale } from "./misc.ts";

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

enum _DefaultNotificationLevel {
  /** Members receive notifications for all messages. */
  ALL_MESSAGES = 0,
  /** Members only receive notifications when they are mentioned. */
  ONLY_MENTIONS = 1,
}

/** Represents the possible values for "default notification level" option. */
export const DefaultNotificationLevel = z.nativeEnum(_DefaultNotificationLevel);
export type DefaultNotificationLevel = z.infer<typeof DefaultNotificationLevel>;

enum _ExplicitFilterLevel {
  /** Media content will not be scanned. */
  DISABLED = 0,
  /** Media content sent by members without roles will not be scanned. */
  MEMBERS_WITHOUT_ROLES = 1,
  /** Media content sent by all members will be scanned. */
  ALL_MEMBERS = 2,
}

/** Represents the possible values for "explicit content filter" option. */
export const ExplicitFilterLevel = z.nativeEnum(_ExplicitFilterLevel);
export type ExplicitFilterLevel = z.infer<typeof ExplicitFilterLevel>;

enum _MFALevel {
  /** Guild has no MFA requirement for moderator actions. */
  NONE = 0,
  /** Guild enforces MFA requirement for moderator actions. */
  ELEVATED = 1,
}

/** Represents the possible values for "enforce MFA" option. */
export const MFALevel = z.nativeEnum(_MFALevel);
export type MFALevel = z.infer<typeof MFALevel>;

enum _GuildVerificationLevel {
  /** Membership is unrestricted. */
  NONE = 0,
  /** User must have verified email. */
  LOW = 1,
  /** In addition to Low, user must be registered for 5 minutes. */
  MEDIUM = 2,
  /** In addition to Medium, user must be part of the server for 10 minutes. */
  HIGH = 3,
  /** In addition to High, user must have a registered phone number. */
  VERY_HIGH = 4,
}

/** Represents the possible values for "verification level" option. */
export const GuildVerificationLevel = z.nativeEnum(_GuildVerificationLevel);
export type GuildVerificationLevel = z.infer<typeof GuildVerificationLevel>;

// no docs for this one yet
enum _GuildNSFWLevel {
  DEFAULT = 0,
  EXPLICIT = 1,
  SAFE = 2,
  AGE_RESTRICTED = 3,
}

/** ? */
export const GuildNSFWLevel = z.nativeEnum(_GuildNSFWLevel);
export type GuildNSFWLevel = z.infer<typeof GuildNSFWLevel>;

enum _GuildPremiumTier {
  /** No premium (server boosting) perks unlocked. */
  NONE = 0,
  /** Tier 1 premium (server boosting) perks unlocked. */
  TIER_1 = 1,
  /** Tier 2 premium (server boosting) perks unlocked. */
  TIER_2 = 2,
  /** Tier 3 premium (server boosting) perks unlocked. */
  TIER_3 = 3,
}

/** Represents the possible premium (server boosting) perk tiers. */
export const GuildPremiumTier = z.nativeEnum(_GuildPremiumTier);
export type GuildPremiumTier = z.infer<typeof GuildPremiumTier>;

/** Represents an unavailable guild in Discord. */
export const UnavailableGuild = z.object({
  /** The ID of the guild. */
  id: Snowflake,
  /** True if outage, false if kicked. */
  unavailable: z.boolean(),
});

export type UnavailableGuild = z.infer<typeof UnavailableGuild>;

/** Represents an available guild in Discord. */
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
  /** The effective permissions of the current user in the guild. */
  permissions: Permissions.optional(),
  /** @deprecated */
  region: z.string().nullish(),
  /** ID of AFK channel. */
  afk_channel_id: Snowflake.nullable(),
  /** Timeout in seconds before member is moved to AFK channel. */
  afk_timeout: z.number().int(),
  /** True if guild widget is enabled. */
  widget_enabled: z.boolean().optional(),
  /** The channel ID that the guild widget generates an invite to. */
  widget_channel_id: Snowflake.nullish(),
  /** Verification level required to enter the guild. */
  verification_level: GuildVerificationLevel,
  /** Default notification level for guild members. */
  default_message_notifications: DefaultNotificationLevel,
  /** Level of explicit content filtering for the guild. */
  explicit_content_filter: ExplicitFilterLevel,
  /** The roles of the guild. */
  roles: z.array(z.unknown()), // TODO
  /** The custom emojis of the guild. */
  emojis: z.array(z.unknown()), // TODO
  /** The features of the guild. */
  features: z.array(GuildFeatures),
  /** The enforced MFA level of the guild. */
  mfa_level: MFALevel,
  /** Application ID of guild creator if it's bot-owned. */
  application_id: Snowflake.nullable(),
  /** ID of where system messages (welcome messages, urgent notices) are posted. */
  system_channel_id: Snowflake.nullable(),
  /** System Channel flags. */
  system_channel_flags: z.number().int(),
  /** For "Community" guilds, the ID of the "rules" channel. */
  rules_channel_id: Snowflake.nullable(),
  /** The maximum number of presences for the guild. Most often `null` except for the largest of guilds. */
  max_presences: z.number().nullish(),
  /** The maximum number of members in the guild. */
  max_members: z.number().optional(),
  /** The Vanity URL of the guild. */
  vanity_url_code: z.string().nullable(),
  /** The description of a guild (if it's in Discovery). */
  description: z.string().nullable(),
  /** Banner hash if a banner is present. */
  banner: z.string().nullable(),
  /** The premium (or server boosting) tier of the guild. */
  premium_tier: GuildPremiumTier,
  /** The number of premium subscriptions the guild has. */
  premium_subscription_count: z.number().int().optional(),
  /** The preferred locale of a community guild. */
  preferred_locale: Locale.default("en-US"),
  /** If a community guild, the Public Server Announcements channel id. */
  public_updates_channel_id: Snowflake.nullable(),
  /** The maximum amount of users in a video channel. */
  max_video_channel_users: z.number().optional(),
  /** The approximate number of members in the guild. */
  approximate_member_count: z.number().optional(),
  /** The approximate number of online people in the guild. */
  approximate_presence_count: z.number().optional(),
  /** The welcome screen of the guild. */
  welcome_screen: z.unknown().optional(), // TODO
  /** The NSFW level of the guild. */
  nsfw_level: GuildNSFWLevel,
  /** The guild's stickers. */
  stickers: z.array(z.unknown()).optional(),
  /** Whether or not the "boost progress bar" is enabled. */
  premium_progress_bar_enabled: z.boolean(),
});

export type AvailableGuild = z.infer<typeof AvailableGuild>;

/** Represents a guild in Discord. */
export const Guild = z.union([UnavailableGuild, AvailableGuild]);
export type Guild = z.infer<typeof Guild>;

declare const guild: Guild;
