import { z } from "../../_deps.ts";

// gateway ops
import { GatewayOpDispatch } from "./op_dispatch.ts";
import { GatewayOpHeartbeatAck } from "./op_heartbeat_ack.ts";
import { GatewayOpHeartbeat } from "./op_heartbeat.ts";
import { GatewayOpHello } from "./op_hello.ts";
import { GatewayOpIdentify } from "./op_identify.ts";
import { GatewayOpInvalidSession } from "./op_invalid_session.ts";
import { GatewayOpPresenceUpdate } from "./op_presence_update.ts";
import { GatewayOpReconnect } from "./op_reconnect.ts";
import { GatewayOpRequestGuildMembers } from "./op_request_guild_members.ts";
import { GatewayOpResume } from "./op_resume.ts";
import { GatewayOpVoiceStateUpdate } from "./op_voice_state_update.ts";

/** A union type of any possible gateway message. */
export const GatewayOp = z.discriminatedUnion("op", [
  GatewayOpDispatch,
  GatewayOpHeartbeatAck,
  GatewayOpHeartbeat,
  GatewayOpHello,
  GatewayOpIdentify,
  GatewayOpInvalidSession,
  GatewayOpPresenceUpdate,
  GatewayOpReconnect,
  GatewayOpRequestGuildMembers,
  GatewayOpResume,
  GatewayOpVoiceStateUpdate,
]);

export type GatewayOp = z.infer<typeof GatewayOp>;
