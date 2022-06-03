import { z } from "../../_deps.ts";
import { Snowflake, Locale } from "./misc.ts";

/** The possible type of premium (aka Nitro) that a user can have. */
export enum PremiumType {
  NONE = 0,
  CLASSIC = 1,
  NITRO = 2,
}

/** The possible type of premium (aka Nitro) that a user can have. */
export const PremiumTypeSchema = z.nativeEnum(PremiumType);
export type PremiumTypeSchema = z.infer<typeof PremiumTypeSchema>;

/** Represents a user on Discord. */
export const User = z.object({
  /** The user's unique ID. */
  id: Snowflake,
  /** The user's username, not unique across the platform. */
  username: z.string().min(1).max(32),
  /** The user's 4-digit Discord tag. */
  discriminator: z
    .string()
    .regex(/^\d{4}$/)
    .refine((v): v is `${number}` => isFinite(parseInt(v))),
  /** The user's avatar hash. */
  avatar: z.string().nullable(),
  /** Whether the user belongs to an OAuth2 application (i.e. is a bot). */
  bot: z.boolean().optional(),
  /** Whether the user is a "System" user (part of urgent message system). */
  system: z.boolean().optional(),
  /** Whether the user has 2FA enabled. */
  mfa_enabled: z.boolean().optional(),
  /** The user's banner hash. */
  banner: z.string().nullish(),
  /** The user's banner accent color. Integer representation of hex code. */
  accent_color: z.number().int().nullish(),
  /** Locale of the user. */
  locale: Locale.optional(),
  /** Whether or not the email of the user has been verified. */
  verified: z.boolean().optional(),
  /** The user's email. */
  email: z.string().email().nullish(),
  /** The flags of a user's account. */
  flags: z.number().int().optional(),
  /** The premium type of the user. @see PremiumType */
  premium_type: PremiumTypeSchema.optional(),
  /** The public flags of the user (i.e. badges). */
  public_flags: z.number().int().optional(),
});

export type User = z.infer<typeof User>;
