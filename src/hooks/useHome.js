
import axios from "axios";
import { useEffect, useState } from "react";

export default function useHome() {
  const [movies, setMovies] = useState([]);
  const [movieImages, setMovieImages] = useState({});
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);

  const getAllMovies = async (type) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${type}?language=es-ES&page=${page}`,
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjE3MzkyNTMwNmVjY2RhNGNkNzljY2FjMjYxMjk0ZiIsInN1YiI6IjY2M2MwZTQwYTFjN2FkN2Y5MTMzOGEzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GAh4z-ksZTZPe1aDUzRKA9V1jFbEVUTi6wxAysOXSXw",
          },
        }
      );

      setMovies(response.data.results);
      setTotalPage(response.data.total_pages);

      const imagesData = {};
      for (const movie of response.data.results) {
        const imageResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie.id}/images`,
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjE3MzkyNTMwNmVjY2RhNGNkNzljY2FjMjYxMjk0ZiIsInN1YiI6IjY2M2MwZTQwYTFjN2FkN2Y5MTMzOGEzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GAh4z-ksZTZPe1aDUzRKA9V1jFbEVUTi6wxAysOXSXw",
            },
          }
        );
        imagesData[movie.id] = imageResponse.data.backdrops;
      }
      setMovieImages(imagesData);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    setPage(1);
  }, [totalPage]);

  return { getAllMovies, movies, movieImages, totalPage, page, handleChange };
}
