import data from "@data/productList.json";
import { PostModel } from "@models/post.model";
import { NextRequest } from "next/server";

let allPosts: PostModel[] = data;

export const DELETE = async (request: NextRequest, { params }: { params: { id: number } }) => {
  try {
    allPosts.map((post: PostModel) => {
      if (post.id === params.id) {
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
