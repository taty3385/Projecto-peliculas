import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


export default function Detail() {
  
const [movieDetail, setMovieDetail] = useState({});
  const [genres, setGenres] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [open, setOpen] = useState(false);
  const { idDetail } = useParams();
  const API_KEY = import.meta.env.VITE_API_KEY;

  const getMovieDetail = async () => {
    try {
      const movieResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${idDetail}?language=es-ES`,
        {
          headers: {
            accept: 'application/json',
            Authorization:  `Bearer ${API_KEY} `,
          },
        }
      );
      setMovieDetail(movieResponse.data);

      const videosResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${idDetail}/videos?language=es-ES`,
        {
          headers: {
            accept: "application/json",
            Authorization:   `Bearer ${API_KEY} `,
          },
        }
      );
        
      const trailer = videosResponse.data.results.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
    
      );

      if (trailer) {
   
        setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}`);
      }
    } catch (error) {
      console.error("Error fetching movie detail or videos:", error);
    }
  };

  const fetchGenres = async () => {
    try {
      const genreResponse = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list?language=es-ES",
        {
          headers: {
            accept: "application/json",
            Authorization:  `Bearer ${API_KEY} `,
          },
        }
      );
      setGenres(genreResponse.data.genres);
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };

  const getGenreNames = (genreIds) => {
    return genreIds.map((genreId) => {
      const genre = genres.find((g) => g.id === genreId);
      return genre ? genre.name : "";
    });
  };

  const handleWatchTrailer = () => {
     setOpen(true);
 }
  

  const handleClose = () => {
    setOpen(false);
  };
  return{
    getMovieDetail,
    handleClose,
    handleWatchTrailer,
    getGenreNames,
    fetchGenres,
    movieDetail,
    open,
    trailerUrl,
  }

}
