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
      await fetch(`/api/posts/favourites/${postId}`, {
        method: "DELETE"
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
    <section className="fav-container">
      {favPostList && favPostList.length > 0 ? favPostList.map((post: PostModel) => {
        return <FavCard key={post.id} post={post} onRemoveFromFavorite={onRemoveFromFavorite} />
      }) : <p className='no-post'></p>}
    </section>

  )
}

export default FavouritePostList;