import { useState } from "react";
import axios from "axios";

export default function useSearch() {
  const [searchResults, setSearchResults] = useState([]);
  
  const [totalPages, setTotalPages] = useState(1);

  const fetchMovies = async (query ,page=1) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?include_adult=false&query=${query}&page=${page}`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjE3MzkyNTMwNmVjY2RhNGNkNzljY2FjMjYxMjk0ZiIsInN1YiI6IjY2M2MwZTQwYTFjN2FkN2Y5MTMzOGEzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GAh4z-ksZTZPe1aDUzRKA9V1jFbEVUTi6wxAysOXSXw`,
          },
        }
      );
      const data = response.data;


      setSearchResults(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return {
    searchResults,
    fetchMovies,
  totalPages,
  };
}
``
