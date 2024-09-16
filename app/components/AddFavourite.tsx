import React from 'react';
import { HiHeart, HiOutlineHeart } from "react-icons/hi";
import { PostModel } from '@models/post.model';

type Props = {
  post: PostModel,
  onAddToFavorite: (postId: number) => void,
}

const AddFavourite = ({ post, onAddToFavorite }: Props) => {
  return (
    <button className='favorite-icon' onClick={() => onAddToFavorite(post.id)}>
      {post.isFavourite ? <HiHeart className='icon-color' /> : <HiOutlineHeart />}
    </button>
  )
}

export default AddFavourite;