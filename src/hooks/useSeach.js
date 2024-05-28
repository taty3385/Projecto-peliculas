import { useState } from "react";
import axios from "axios";

export default function useSearch() {
  const [searchResults, setSearchResults] = useState([]);

  const API_KEY = import.meta.env.VITE_API_KEY;

  const fetchMovies = async (query) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?include_adult=false&query=${query}`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_KEY} `,
          },
        }
      );
      const data = response.data;
      setSearchResults(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return {
    searchResults,
    fetchMovies,
  };
}
``;
