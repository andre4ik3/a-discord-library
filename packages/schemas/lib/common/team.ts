import { z } from "../../_deps.ts";
import { Snowflake } from "./misc.ts";
import { User } from "./user.ts";

/** The membership state of a team member. */
export enum MembershipState {
  INVITED = 1,
  ACCEPTED = 2,
}

/** The membership state of a team member. */
export const MembershipStateSchema = z.nativeEnum(MembershipState);
export type MembershipStateSchema = z.infer<typeof MembershipStateSchema>;

/** Represents a member that is part of a team. */
export const TeamMember = z.object({
  /** The membership state of the user. */
  membership_state: MembershipStateSchema,
  /** Currently, is always `["*"]` */
  permissions: z.array(z.literal("*")),
  /** The ID of the parent team that the user is a member of. */
  team_id: Snowflake,
  /** Partial user object representing the member. */
  user: User.pick({
    avatar: true,
    discriminator: true,
    id: true,
    username: true,
  }),
});

export type TeamMember = z.infer<typeof TeamMember>;

/** Represents a team on Discord. */
export const Team = z.object({
  /** A hash of the team icon image. */
  icon: z.string().nullable(),
  /** The unique ID of the team. Every team is actually a "pseudo-user". */
  id: Snowflake,
  /** The members of the team. */
  members: z.array(TeamMember),
  /** The name of the team. */
  name: z.string(),
  /** The ID of the team owner. */
  owner_user_id: Snowflake,
});

export type Team = z.infer<typeof Team>;
