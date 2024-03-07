import { apiClient as twitchApiClient } from "../../../_utils/twitch";
import { kv } from "@vercel/kv";

export async function GET(request: Request) {
  const goal = await kv.get("follower-goal") satisfies string | null;
  const current = await twitchApiClient.channels.getChannelFollowerCount(process.env.TWITCH_CHANNEL_ID as string);
  return Response.json({ goal, current });
}