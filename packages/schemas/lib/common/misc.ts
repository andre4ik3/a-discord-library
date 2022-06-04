import { z } from "../../_deps.ts";

/** Represents a Snowflake from Discord. */
export const Snowflake = z
  .string()
  .min(16)
  .max(19)
  .regex(/^\d+$/)
  .refine((v): v is `${bigint}` => isFinite(parseInt(v)));

export type Snowflake = z.infer<typeof Snowflake>;

/** Represents a permission bitfield on Discord. */
export const Permissions = z
  .string()
  .regex(/^\d+$/)
  .refine((v): v is `${bigint}` => isFinite(parseInt(v)));

export type Permissions = z.infer<typeof Permissions>;

/** Utility type to represent a hex color code. */
export const HexColor = z.number().min(0x000000).max(0xffffff);
export type HexColor = z.infer<typeof HexColor>;

/** Represents a locale on Discord. */
export const Locale = z.enum([
  "da",
  "de",
  "en-GB",
  "en-US",
  "es-ES",
  "fr",
  "hr",
  "it",
  "lt",
  "hu",
  "nl",
  "no",
  "pl",
  "pt-BR",
  "ro",
  "fi",
  "sv-SE",
  "vi",
  "tr",
  "cs",
  "el",
  "bg",
  "ru",
  "uk",
  "hi",
  "th",
  "zh-CN",
  "ja",
  "zh-TW",
  "ko",
]);

export type Locale = z.infer<typeof Locale>;
