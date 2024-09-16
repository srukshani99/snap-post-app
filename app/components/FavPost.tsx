'use client'

import { PostModel } from '@models/post.model';
import React from 'react'
import RemoveFavourite from './RemoveFavourite';

type Props = {
  post: PostModel,
  onRemoveFromFavorite: (postId: number) => void,
}

const FavCard = ({ post, onRemoveFromFavorite }: Props) => {
  return (
    <div className="card">
      <img src={`assets/images/${post.image}`} alt={post.image} />
      <div className="card-fav-title">
        <h2 >{post.title} </h2>
        <RemoveFavourite post={post} onRemoveFromFavorite={onRemoveFromFavorite} />
      </div>
      <p className="card-text">View Post</p>
    </div>
  )
}

export default FavCard;