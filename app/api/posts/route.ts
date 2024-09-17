import { getAllSnapPosts } from "@app/util/data.util";

/**
 * API to get all posts available
 * @returns
 */
export const GET = async () => {
  try {
    const data = getAllSnapPosts();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all posts", { status: 500 });
  }
};
