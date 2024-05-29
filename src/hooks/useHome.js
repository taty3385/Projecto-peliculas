import axios from "axios";
import { useState } from "react";

export default function useHome() {
  const [movies, setMovies] = useState([]);
  const [movieImages, setMovieImages] = useState({});
  const [totalPage, setTotalPage] = useState(0);
  const [top10, setTop10] = useState([]);
  const API_KEY = import.meta.env.VITE_API_KEY;
 

  const getAllMovies = async (type, page = 1) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${type}?language=es-ES&page=${page}`,
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${API_KEY} `,
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
              `Bearer ${API_KEY} `,
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
            Authorization:
            `Bearer ${API_KEY} `,
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
