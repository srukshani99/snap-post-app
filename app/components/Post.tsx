import React from 'react';
import { HiHeart } from "react-icons/hi";
import AddFavourite from './AddFavourite';
import { PostModel } from '@models/post.model';
import Image from 'next/image';

type Props = {
  post: PostModel,
  onAddToFavorite: (postId: number) => void,
}

const Post = ({ post, onAddToFavorite }: Props) => {

  return (
    <div className="card">
      <div className="card-header">
        <div className='card-header-details'>
          <Image
            src={`/assets/images/${post.postedBy.image}`}
            alt="Profile"
            className="profile-img"
            width={500}
            height={500}
          />
          <div className="user-info">
            <h3>{post.postedBy.username}</h3>
            <p >{post.createdOn}</p>
          </div>
        </div>
        <AddFavourite post={post} onAddToFavorite={onAddToFavorite} />
      </div>

      <Image src={`/assets/images/${post.image}`} alt={post.image} width={500} height={500} />

      <h2 className="card-title">{post.title}</h2>
      <div className="card-actions">
        <div className="icons">
          <HiHeart className="icon-heart" />
          <strong>{`${post.likesCount} likes`}</strong>
        </div>

        <p className="description">{post.description}</p>
        <div>
          {post.hashTags && post.hashTags.length > 0 && post.hashTags.map((tag: string, index: number) => {
            return <span key={index} className="hashtag">{tag}</span>
          })}
        </div>
        <p className="card-text">
          {`View ${post.commentsCount} comments`}
        </p>
      </div>
    </div>
  )
}

export default Post;