import { z } from "../../_deps.ts";
import { Snowflake } from "./misc.ts";

/**
 * Represents a possible status (online, dnd, etc.) of a user.
 * @see https://discord.dev/topics/gateway#update-presence-status-types
 */
export const Status = z.enum(["online", "dnd", "idle", "invisible", "offline"]);
export type Status = z.infer<typeof Status>;

enum _ActivityType {
  GAME = 0,
  STREAMING = 1,
  LISTENING = 2,
  WATCHING = 3,
  CUSTOM = 4,
  COMPETING = 5,
}

/**
 * Represents the possible activity types of Discord.
 * @see https://discord.dev/topics/gateway#activity-object-activity-types
 */
export const ActivityType = z.nativeEnum(_ActivityType);
export type ActivityType = z.infer<typeof ActivityType>;

/**
 * Represents an activity on Discord.
 * @see https://discord.dev/topics/gateway#activity-object
 */
export const Activity = z.object({
  name: z.string(),
  /** @see ActivityType */
  type: ActivityType,
  url: z.string().url().nullish(),
  created_at: z.number().int(),
  timestamps: z
    .object({
      start: z.number().int().optional(),
      end: z.number().int().optional(),
    })
    .optional(),
  application_id: Snowflake.optional(),
  details: z.string().nullish(),
  state: z.string().nullish(),
  emoji: z
    .object({
      name: z.string(),
      id: Snowflake.optional(),
      animated: z.boolean().optional(),
    })
    .nullish(),
  party: z
    .object({
      id: z.string().optional(),
      size: z.tuple([z.number().int(), z.number().int()]).optional(),
    })
    .optional(),
  assets: z
    .object({
      large_image: z.string().optional(),
      large_text: z.string().optional(),
      small_image: z.string().optional(),
      small_text: z.string().optional(),
    })
    .optional(),
  secrets: z
    .object({
      join: z.string().optional(),
      spectate: z.string().optional(),
      match: z.string().optional(),
    })
    .optional(),
  instance: z.boolean().optional(),
  flags: z.number().int().optional(),
  buttons: z
    .array(
      z.union([
        z.string(),
        z.object({
          label: z.string().min(1).max(32),
          url: z.string().min(1).max(512).url(),
        }),
      ])
    )
    .max(2)
    .optional(),
});

export type Activity = z.infer<typeof Activity>;
