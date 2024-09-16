import data from "@data/productList.json";
import { PostModel } from "@models/post.model";

let allPosts: PostModel[] = data;

export const DELETE = async (request: any, { param }: any) => {
  try {
    const { postId } = await request.json();
    allPosts.map((post: PostModel) => {
      if (post.id === postId) {
        post.isFavourite = false;
      }
    });
    return new Response("Successfully removed from favourite posts", {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to remove from favourite posts", {
      status: 500,
    });
  }
};
