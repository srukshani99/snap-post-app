import React from 'react';
import { PostModel } from '@models/post.model'
import { HiArchiveBoxXMark } from "react-icons/hi2";

type Props = {
  post: PostModel,
  onRemoveFromFavorite: (postId: number) => void,
}

const RemoveFavourite = ({ post, onRemoveFromFavorite }: Props) => {
  return (
    <button className='favorite-icon ' onClick={() => onRemoveFromFavorite(post.id)}>
      <HiArchiveBoxXMark className='filled' />
    </button>
  )
}

export default RemoveFavourite;