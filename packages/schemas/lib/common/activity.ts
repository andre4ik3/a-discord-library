import { z } from "../../_deps.ts";
import { Snowflake } from "./misc.ts";

/** Represents a possible status (online, dnd, etc.) of a user. */
export const Status = z.enum(["online", "dnd", "idle", "invisible", "offline"]);
export type Status = z.infer<typeof Status>;

enum _ActivityType {
  /** Playing {name} */
  GAME = 0,
  /** Streaming {details} */
  STREAMING = 1,
  /** Listening to {name} */
  LISTENING = 2,
  /** Watching {name} */
  WATCHING = 3,
  /** {emoji} {name} (not supported for bots?) */
  CUSTOM = 4,
  /** Competing in {name} */
  COMPETING = 5,
}

/** Represents the possible activity types of Discord. */
export const ActivityType = z.nativeEnum(_ActivityType);
export type ActivityType = z.infer<typeof ActivityType>;

/**
 * Represents an activity on Discord.
 * Bots can only send `name`, `type`, and `url`.
 */
export const Activity = z.object({
  /** The name of the activity. */
  name: z.string(),
  /** The type of the activity. @see ActivityType */
  type: ActivityType,
  /** The stream URL of the activity, validated when type is 1. */
  url: z.string().url().nullish(),
  /** Unix Timestamp (ms) of when the activity was added to the user session. */
  created_at: z.number().int(),
  /** Unix Timestamps for start/end of the game. */
  timestamps: z
    .object({
      /** Unix Timestamp (ms) of when the activity started. */
      start: z.number().int().optional(),
      /** Unix Timestamp (ms) of when the activity will end. */
      end: z.number().int().optional(),
    })
    .optional(),
  /** Application ID of the game, for rich presence. */
  application_id: Snowflake.optional(),
  /** What the player is currently doing. */
  details: z.string().nullish(),
  /** The user's current party status. */
  state: z.string().nullish(),
  /** Emoji, used for custom status. */
  emoji: z
    .object({
      /** The name of the emoji. */
      name: z.string(),
      /** The ID of the emoji, if it is a custom one. */
      id: Snowflake.optional(),
      /** True if the emoji is animated. */
      animated: z.boolean().optional(),
    })
    .nullish(),
  /** Information about the current player's party. */
  party: z
    .object({
      /** Unique ID (_not_ snowflake!) of the party. */
      id: z.string().optional(),
      /** Tuple of current and max party size. */
      size: z
        .tuple([
          /** The current size of the party. */
          z.number().int(),
          /** The maximum size of the party. */
          z.number().int(),
        ])
        .optional(),
    })
    .optional(),
  /** Images and hover texts for Rich Presence feature. */
  assets: z
    .object({
      large_image: z.string().optional(),
      large_text: z.string().optional(),
      small_image: z.string().optional(),
      small_text: z.string().optional(),
    })
    .optional(),
  /** Secrets for joining and spectating a Rich Presence game. */
  secrets: z
    .object({
      join: z.string().optional(),
      spectate: z.string().optional(),
      match: z.string().optional(),
    })
    .optional(),
  /** Whether or not this is an instanced game session. */
  instance: z.boolean().optional(),
  /** Activity flags. */
  flags: z.number().int().optional(),
  /**
   * When bots receive this, it will be array of button labels.
   * When sending, array of button label and URLs.
   */
  buttons: z
    .array(
      z.union([
        z.string(),
        z.object({
          /** The label of the button. */
          label: z.string().min(1).max(32),
          /** The URL of the button. */
          url: z.string().min(1).max(512).url(),
        }),
      ])
    )
    .max(2)
    .optional(),
});

export type Activity = z.infer<typeof Activity>;
