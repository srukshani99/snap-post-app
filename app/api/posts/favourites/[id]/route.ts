import { NextRequest } from "next/server";
import { removeFromFavourite } from "@app/util/data.util";

export const DELETE = async (request: NextRequest, { params }: { params: { id: number } }) => {
  try {
    removeFromFavourite(params.id);
    return new Response("Successfully removed from favourite posts", {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to remove from favourite posts", {
      status: 500,
    });
  }
};
