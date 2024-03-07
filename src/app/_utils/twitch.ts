// import { AccessTokenWithUserId, RefreshingAuthProvider } from "@twurple/auth";
// import { ApiClient } from "@twurple/api";
// import { kv } from "@vercel/kv";

// const clientId = process.env.TWITCH_CLIENT_ID as string;
// const clientSecret = process.env.TWITCH_CLIENT_SECRET as string;
// const userId = process.env.TWITCH_CHANNEL_ID as string;

// const authProvider = new RefreshingAuthProvider({
//     clientId,
//     clientSecret,
// });

// authProvider.onRefresh(async (userId, newTokenData) => {
//     await kv.set("twitch-token", newTokenData);
// });

// const initProvider = async () => {
//   const tokenData = await kv.get("twitch-token") satisfies AccessTokenWithUserId | null;
//   if (tokenData) {
//     await authProvider.addUserForToken(tokenData);
//     authProvider.addUser(userId, tokenData);
//   }
// };
  
// initProvider();

// export const apiClient = new ApiClient({ authProvider });

import { ApiClient } from "@twurple/api";
import { AppTokenAuthProvider } from "@twurple/auth";

const clientId = process.env.TWITCH_CLIENT_ID as string;
const clientSecret = process.env.TWITCH_CLIENT_SECRET as string;

const authProvider = new AppTokenAuthProvider(clientId, clientSecret);

export const apiClient = new ApiClient({ authProvider });