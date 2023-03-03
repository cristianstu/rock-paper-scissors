import type { RequestHandler } from "@sveltejs/kit";

import { pusherClient } from "$lib/server/pusher";

export const POST: RequestHandler = async (event) => {
  const body = await event.request.json()

  const { code } = event.params;

  await pusherClient.trigger(`room-${code}`, "oponent-joined", { ...body });

  return new Response();
}
