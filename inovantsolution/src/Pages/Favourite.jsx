// Favourite.jsx
import React from "react";
import { useFavorites } from "../Components/FavoritesContext";
import RestaurantCard from "../Components/RestaurantCard";

const Favourite = () => {
  const { favorites } = useFavorites();

  if (!favorites.length) {
    return (
      <div className="container py-5">
        <h3 className="mb-3">❤️ Your Favourites</h3>
        <p>You haven’t liked any restaurants yet.</p>
      </div>
    );
  }

  return (
    <div className="container py-5 favourite">
      <h3 className="mb-4">❤️ Your Favourite Restaurants</h3>

      <div className="row">
        {favorites.map((item) => (
          <div className="col-md-3 col-sm-6 mb-4" key={item.id}>
            <RestaurantCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourite;
