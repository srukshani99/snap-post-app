'use client'

import React, { useState, useEffect } from 'react';
import Post from './Post';
import { PostModel } from '@models/post.model';

const PostList = () => {

  const [postList, setPostList] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch('/api/posts');
    setPostList(await response.json());
  }

  const onAddToFavorite = async (postId: number) => {
    try {
      await fetch(`/api/posts/favourites`, {
        method: "POST",
        body: JSON.stringify({
          postId: postId
        }),
      });
      fetchPosts();
    } catch (error) {
      console.log('Error occurred in adding to favourite list', error);
    }

  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section className="container">
      {postList && postList.length > 0 ? postList.map((post: PostModel) => {
        return <Post key={post.id} post={post} onAddToFavorite={onAddToFavorite} />
      }) : <p>No Posts</p>}
    </section>
  )
}

export default PostList