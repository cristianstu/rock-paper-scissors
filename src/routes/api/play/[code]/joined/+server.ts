import type { RequestHandler } from "@sveltejs/kit";
import Pusher from "pusher"

export const POST: RequestHandler = async (event) => {
  const body = await event.request.json()

  const { code } = event.params;

  const pusher = new Pusher({
    appId: "1561621",
    key: "9e6d9731bfcb4a5657b3",
    secret: "5f168a088e32321c34ee",
    cluster: "us2",
    useTLS: true
  });

  await pusher.trigger(`room-${code}`, "oponent-joined", { ...body });

  return new Response();
}
