import { z } from "../../_deps.ts";
import { Team } from "./team.ts";
import { User } from "./user.ts";
import { Snowflake } from "./misc.ts";

/** Represents the possible values for a Discord OAuth2 scope. */
export const ApplicationScopes = z.enum([
  "activities.read",
  "activities.write",
  "applications.builds.read",
  "applications.builds.upload",
  "applications.commands",
  "applications.commands.update",
  "applications.commands.permissions.update",
  "applications.entitlements",
  "applications.store.update",
  "bot",
  "connections",
  "dm_channels.read",
  "email",
  "gdm.join",
  "guilds",
  "guilds.join",
  "guilds.members.read",
  "identify",
  "messages.read",
  "relationships.read",
  "rpc",
  "rpc.activities.write",
  "rpc.notifications.read",
  "rpc.voice.read",
  "rpc.voice.write",
  "voice",
  "webhook.incoming",
]);

export type ApplicationScopes = z.infer<typeof ApplicationScopes>;

/** Represents an application on Discord. */
export const Application = z.object({
  /** The ID of the app. */
  id: Snowflake,
  /** The name of the app. */
  name: z.string(),
  /** The icon hash of the app. */
  icon: z.string().nullable(),
  /** The description of the app. */
  description: z.string(),
  /** An array of RPC origin URLs, if RPC is enabled. */
  rpc_origins: z.array(z.string().url()).optional(),
  /** When false, only the app owner can join the bot to a guild. */
  bot_public: z.boolean(),
  /** When true, the app's bot will only join after full OAuth2 flow. */
  bot_require_code_grant: z.boolean(),
  /** The URL to the app's Terms of Service. */
  terms_of_service_url: z.string().url().optional(),
  /** The URL to the app's Privacy Policy. */
  privacy_policy_url: z.string().url().optional(),
  /** Info about the owner of the application. */
  owner: User.optional(),
  /** @deprecated */
  summary: z.string().max(0),
  /** Hex-encoded key for GameSDK interaction verification. */
  verify_key: z.string(),
  /** The team that the application belongs to, if any. */
  team: Team.nullable(),
  /** For games on the Discord Store, the linked Guild ID. */
  guild_id: Snowflake.optional(),
  /** For games on the Discord Store, the primary SKU ID. */
  primary_sku_id: Snowflake.optional(),
  /** For games on the Discord Store, the slug that links to the store page. */
  slug: z.string().optional(),
  /** The hash of the default Rich Presence cover image. */
  cover_image: z.string().optional(),
  /** The application's public flags. */
  flags: z.number().int().optional(),
  /** Up to 5 tags that describe the app's content and functionality. */
  tags: z.array(z.string()).max(5).optional(),
  /** Settings for the app's built-in authorization link, if enabled. */
  install_params: z
    .object({
      /** The scopes to add the application with. */
      scopes: z.array(ApplicationScopes),
      /** The permissions to request for the bot role. */
      permissions: z.string(),
    })
    .optional(),
  /** The application's default custom authorization link, if enabled. */
  custom_install_url: z.string().url().optional(),
});

export type Application = z.infer<typeof Application>;
