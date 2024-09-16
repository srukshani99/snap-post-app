'use client'

import React, { useState, useEffect } from 'react';
import FavCard from './FavPost';
import { PostModel } from '@models/post.model';

const FavouritePostList = () => {

  const [favPostList, setFavPostList] = useState([]);

  const fetchFavPosts = async () => {
    const response = await fetch('/api/posts/favourites');
    setFavPostList(await response.json());
  }

  const onRemoveFromFavorite = async (postId: number) => {
    try {
      const response = await fetch(`/api/posts/favourites/${postId}`, {
        method: "DELETE",
        body: JSON.stringify({
          postId: postId
        }),
      });
      fetchFavPosts();
    } catch (error) {
      console.log("Error occurred in removing favourite post: ", error);
    }
  }

  useEffect(() => {
    fetchFavPosts();
  }, []);

  return (
    <>
      {favPostList && favPostList.length > 0 ? favPostList.map((post: PostModel, index: number) => {
        return <section className="fav-container"><FavCard key={index} post={post} onRemoveFromFavorite={onRemoveFromFavorite} /></section>
      }) : <p className='no-post'>No Favourte Posts Yet...</p>}
    </>

  )
}

export default FavouritePostList;