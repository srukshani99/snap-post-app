import React from 'react';
import FavouritePostList from '@app/components/FavouritePostList';

const Favourites = () => {
  return (
    <main>
      <section className="page-top-section">
        <div className="page-top-header">
          <h1>My Favourite Snaps</h1>
        </div>
        <div className="page-top-desc">
          <p>Please see your favourited snaps here or remove them from your favourites</p>
        </div>
      </section>
      <FavouritePostList />
    </main>
  )
}

export default Favourites;