import { z } from "../../_deps.ts";
import { Team } from "./team.ts";
import { User } from "./user.ts";
import { Snowflake } from "./misc.ts";

/**
 * Represents the possible values for a Discord OAuth2 scope.
 * @see https://discord.dev/topics/oauth2#shared-resources-oauth2-scopes
 */
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

/**
 * Represents an application on Discord.
 * @see https://discord.dev/resources/application
 */
export const Application = z.object({
  id: Snowflake,
  name: z.string(),
  icon: z.string().nullable(),
  description: z.string(),
  rpc_origins: z.array(z.string().url()).optional(),
  bot_public: z.boolean(),
  bot_require_code_grant: z.boolean(),
  terms_of_service_url: z.string().url().optional(),
  privacy_policy_url: z.string().url().optional(),
  owner: User.optional(),
  /** @deprecated */
  summary: z.string().max(0),
  verify_key: z.string(),
  team: Team.nullable(),
  guild_id: Snowflake.optional(),
  primary_sku_id: Snowflake.optional(),
  slug: z.string().optional(),
  cover_image: z.string().optional(),
  flags: z.number().int().optional(),
  tags: z.array(z.string()).max(5).optional(),
  install_params: z
    .object({
      scopes: z.array(ApplicationScopes),
      permissions: z.string(),
    })
    .optional(),
  custom_install_url: z.string().url().optional(),
});

export type Application = z.infer<typeof Application>;
