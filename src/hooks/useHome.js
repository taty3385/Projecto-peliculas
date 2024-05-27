
import axios from "axios";
import { useState } from "react";

export default function useHome() {
  const [movies, setMovies] = useState([]);
  const [movieImages, setMovieImages] = useState({});
  const [totalPage, setTotalPage] = useState(0);

  const [top10, setTop10] = useState([]);
  const API_KEY = import.meta.env.VITE_API_KEY;
    // "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjE3MzkyNTMwNmVjY2RhNGNkNzljY2FjMjYxMjk0ZiIsInN1YiI6IjY2M2MwZTQwYTFjN2FkN2Y5MTMzOGEzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GAh4z-ksZTZPe1aDUzRKA9V1jFbEVUTi6wxAysOXSXw";

  const getAllMovies = async (type, page=1) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${type}?language=es-ES&page=${page}`,
        {
          headers: {
            accept: "application/json",
            Authorization:  `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjE3MzkyNTMwNmVjY2RhNGNkNzljY2FjMjYxMjk0ZiIsInN1YiI6IjY2M2MwZTQwYTFjN2FkN2Y5MTMzOGEzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GAh4z-ksZTZPe1aDUzRKA9V1jFbEVUTi6wxAysOXSXw`
          },
        }
      );
      setMovies(response.data.results);
      setTotalPage(response.data.total_pages);
      setTop10(response.data.results)
      const imagesData = {};



      for (const movie of response.data.results) {
        const imageResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie.id}/images`,
          {
            headers: {
              accept: "application/json",
              Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjE3MzkyNTMwNmVjY2RhNGNkNzljY2FjMjYxMjk0ZiIsInN1YiI6IjY2M2MwZTQwYTFjN2FkN2Y5MTMzOGEzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GAh4z-ksZTZPe1aDUzRKA9V1jFbEVUTi6wxAysOXSXw"
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


  const getTop10 = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?language=es-ES`,
        {
          headers: {
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjE3MzkyNTMwNmVjY2RhNGNkNzljY2FjMjYxMjk0ZiIsInN1YiI6IjY2M2MwZTQwYTFjN2FkN2Y5MTMzOGEzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GAh4z-ksZTZPe1aDUzRKA9V1jFbEVUTi6wxAysOXSXw",
          },
        }
      );
      setTop10(response.data.results);
    } catch (error) {
      console.error("Error fetching top 10 movies:", error);
    }
  };

  return {
    getAllMovies,
    movies,
    movieImages,
    totalPage,
   
    getTop10,
    top10,
  };
}
