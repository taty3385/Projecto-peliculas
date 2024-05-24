import axios from "axios";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function useHome() {
  const [movies, setMovies] = useState([]);
  const [movieImages, setMovieImages] = useState({});
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);
  const [top10, setTop10] = useState([]);
  const apiKey =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjE3MzkyNTMwNmVjY2RhNGNkNzljY2FjMjYxMjk0ZiIsInN1YiI6IjY2M2MwZTQwYTFjN2FkN2Y5MTMzOGEzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GAh4z-ksZTZPe1aDUzRKA9V1jFbEVUTi6wxAysOXSXw";

  const getAllMovies = async (type) => {

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${type}?language=es-ES&page=${page}`,
        {
          headers: {
            accept: "application/json",
            Authorization: apiKey,
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
              Authorization: apiKey,
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

  const getTop10 = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?language=es-ES`,
        {
          headers: {
            accept: "application/json",
            Authorization: apiKey,
          },
        }
      );
      console.log(response.data.results);
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
    page,
    handleChange,
    apiKey,
    getTop10,
    top10,
  
  };
}
