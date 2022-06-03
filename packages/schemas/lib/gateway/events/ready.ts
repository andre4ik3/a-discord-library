import { z } from "../../../_deps.ts";

export const EventReady = z.object({
  t: z.literal("READY"),
  d: z.object({}),
});
