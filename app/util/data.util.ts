
import data from "@data/productList.json";
import { PostModel } from "@models/post.model";

let allPosts: PostModel[] = data;

export const getAllSnapPosts = () => allPosts;

export const addToFavourite = (id: number) => {
  const post = allPosts.find((post) => post.id === id);
  if (post) {
    post.isFavourite = true;
  } else {
    throw new Error("Error occurred");
  }
};

export const getFavouriteSnapPosts = () => {
  return allPosts.filter((post) => post.isFavourite === true);
};

export const removeFromFavourite = (id: number) => {
  allPosts = allPosts.map((post: PostModel) => {
    if (post.id == id) {
      return {...post, isFavourite: false};
    }
    return post;
  });
};