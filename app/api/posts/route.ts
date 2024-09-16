import { PostModel } from "@/models/post.model";
import data from "@data/productList.json";

/**
 * API to get all posts available
 * @returns
 */
export const GET = async () => {
  try {
    let allPosts: PostModel[] = data;
    return new Response(JSON.stringify(allPosts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all posts", { status: 500 });
  }
};
