import { z } from "../../_deps.ts";
import { Snowflake } from "./misc.ts";
import { User } from "./user.ts";

enum _MembershipState {
  INVITED = 1,
  ACCEPTED = 2,
}

/** The membership state of a team member. */
export const MembershipState = z.nativeEnum(_MembershipState);
export type MembershipState = z.infer<typeof MembershipState>;

/** Represents a member that is part of a team. */
export const TeamMember = z.object({
  membership_state: MembershipState,
  permissions: z.array(z.literal("*")),
  team_id: Snowflake,
  user: User.pick({
    avatar: true,
    discriminator: true,
    id: true,
    username: true,
  }),
});

export type TeamMember = z.infer<typeof TeamMember>;

/**
 * Represents a team on Discord.
 * @see https://discord.dev/topics/teams#data-models-team-object
 */
export const Team = z.object({
  icon: z.string().nullable(),
  id: Snowflake,
  members: z.array(TeamMember),
  name: z.string(),
  owner_user_id: Snowflake,
});

export type Team = z.infer<typeof Team>;
