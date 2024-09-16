import { User } from "./user.model";

export interface PostModel {
  id: number;
  title: string;
  description: string;
  image: string;
  likesCount: number;
  commentsCount: number;
  hashTags: string[];
  createdOn: string;
  postedBy: User;
  isFavourite: boolean
}
