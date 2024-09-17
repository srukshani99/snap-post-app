'use client'

import { PostModel } from '@models/post.model';
import React from 'react'
import RemoveFavourite from './RemoveFavourite';
import Image from 'next/image';

type Props = {
  post: PostModel,
  onRemoveFromFavorite: (postId: number) => void,
}

const FavCard = ({ post, onRemoveFromFavorite }: Props) => {
  return (
    <div className="card">
      <Image src={`/assets/images/${post.image}`} alt={post.image} width={500} height={500} />
      <div className="card-fav-title">
        <h2 >{post.title} </h2>
        <RemoveFavourite post={post} onRemoveFromFavorite={onRemoveFromFavorite} />
      </div>
      <p className="card-text">View Post</p>
    </div>
  )
}

export default FavCard;