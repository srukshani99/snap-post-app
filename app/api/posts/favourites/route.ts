import { NextRequest } from "next/server";
import { addToFavourite, getFavouriteSnapPosts } from "@app/util/data.util";
/**
 * API to add posts to favourites
 * @param request
 * @returns
 */
export const POST = async (request: NextRequest) => {
  try {
    const { postId } = await request.json();
    addToFavourite(postId);
    return new Response("Post added to favourites", { status: 200 });
  } catch (error) {
    return new Response("Failed to add to favourite posts", { status: 500 });
  }
};

/**
 * API to get all favourite posts
 * @returns
 */
export const GET = async () => {
  try {
    const data = getFavouriteSnapPosts();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch favourite posts", { status: 500 });
  }
};
