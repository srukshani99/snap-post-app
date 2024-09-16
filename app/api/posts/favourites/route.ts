import { PostModel } from "@/models/post.model";
import data from "@data/productList.json";

let allPosts: PostModel[] = data;

/**
 * API to add posts to favourites
 * @param request
 * @returns
 */
export const POST = async (request: any) => {
  try {
    const { postId } = await request.json();
    allPosts.map((post: PostModel) => {
      if (post.id === postId) {
        post.isFavourite = true;
      }
    });
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
    let favPosts = allPosts.filter((post: PostModel) => post.isFavourite === true);
    return new Response(JSON.stringify(favPosts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch favourite posts", { status: 500 });
  }
};
