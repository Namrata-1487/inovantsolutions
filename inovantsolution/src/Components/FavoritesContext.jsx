// src/FavoritesContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
 const [favorites, setFavorites] = useState(() => {
  // keep favourites after refresh
  const stored = localStorage.getItem("favorites");
  return stored ? JSON.parse(stored) : [];
 });


 
 useEffect(() => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
 }, [favorites]);

 const isFavorite = (id) => favorites.some((r) => r.id === id);

 const toggleFavorite = (restaurant) => {
  setFavorites((prev) =>
   isFavorite(restaurant.id)
    ? prev.filter((r) => r.id !== restaurant.id) // remove
    : [...prev, restaurant] // add
  );
 };

 return (
  <FavoritesContext.Provider value={{ favorites, isFavorite, toggleFavorite }}>
   {children}
  </FavoritesContext.Provider>
 );
};

export const useFavorites = () => useContext(FavoritesContext);
