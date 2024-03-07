import { kv } from "@vercel/kv";

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET(request: Request) {
  let currentCount = await kv.get("mock-follower-count") satisfies number | null;
  console.log({ currentCount });
  if (!currentCount) {
    currentCount = 22;
  }
  const count = await kv.set("mock-follower-count", currentCount + 1);
  console.log({ count });
  return Response.json({ current: currentCount.toString(), goal: "100"});
}