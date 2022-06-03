import { z } from "../../_deps.ts";

/** The packet for the initial handshake with the Gateway. */
export const GatewayOpIdentify = z.object({
  op: z.literal(2),
  d: z.object({
    /** The token of the bot. */
    token: z.string(),
    /** Additional properties (for Discord analytics?) */
    properties: z.object({
      /** The name of the operating system. */
      $os: z.string(),
      /** For bots, the library name. */
      $browser: z.string(),
      /** For bots, the library name. */
      $device: z.string(),
    }),
    /**
     * Whether this connection uses *payload* compression.
     * Ignored when *transport* compression is used.
     * @default false
     */
    compress: z.boolean().default(false),
    /**
     * The threshold at which the Gateway will stop sending offline members for
     * guilds with members over this number.
     * @default 50
     */
    large_threshold: z.number().min(50).max(250).default(50),
    /** A tuple of two numbers - the Shard ID and the number of Shards. */
    shard: z
      .tuple([
        /** The Shard ID of the connection. */
        z.number().int(),
        /** The total number of Shards across the bot. */
        z.number().int(),
      ])
      .optional(),
    /** The intent bitfield of the client. */
    intents: z.number().int(),
  }),
  s: z.null().optional(),
  t: z.null().optional(),
});

export type GatewayOpIdentify = z.infer<typeof GatewayOpIdentify>;
