
import React, { createContext, useEffect, useState } from "react";

export const FavoriteContext = createContext();

const FavoriteContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const favoriteLs = JSON.parse(localStorage.getItem("favorites"))|| [];
    return favoriteLs 
  });

 
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]); 

  const addFavorite = (newfavorite) => {
    setFavorites([...favorites, newfavorite]);
  };

  const removeFavorite = (id) => {
    const filterFavorite = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(filterFavorite);
  };

  const isFavorite = (id) => {
    const exist = favorites.some((favorite) => favorite.id === id);
    return exist;
  };

  const totalFavorite = () => {
    return favorites.length;
  };

  const data = {
    addFavorite,
    favorites,
    removeFavorite,
    isFavorite,
    totalFavorite,
  };

  return (
    <FavoriteContext.Provider value={data}>{children}</FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
