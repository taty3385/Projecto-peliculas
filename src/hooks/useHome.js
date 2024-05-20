

// import React, { useState } from 'react';
// import axios from 'axios';

// export default function useHome() {
//   const [popularMovies, setPopularMovies] = useState([]);
//   const [topRatedMovies, setTopRatedMovies] = useState([]);
//   const [movieImages, setMovieImages] = useState({});
//   const [totalPage, setTotalPage] = useState(0);
//   const [page, setPage] = useState(1);

//   const getAllMovies = async (type) => {
//     try {
//       const popularResponse = await axios.get(
//         `https://api.themoviedb.org/3/movie/${type}?language=es-ES&page=${page}`,
//         {
//           headers: {
//             accept: 'application/json',
//             Authorization:
//               'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjE3MzkyNTMwNmVjY2RhNGNkNzljY2FjMjYxMjk0ZiIsInN1YiI6IjY2M2MwZTQwYTFjN2FkN2Y5MTMzOGEzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GAh4z-ksZTZPe1aDUzRKA9V1jFbEVUTi6wxAysOXSXw',
//           },
//         }
//       );
//       if (type === 'popular') {
//         setPopularMovies(response.data.results);
//       } else if (type === 'top_rated') {
//         setTopRatedMovies(response.data.results);
//       }
//     } catch (error) {
//       console.error('Error fetching movies:', error);
//     }
//   };

//       const imagesData = {};
//       for (const movie of popularResponse.data.results) {
//         const imageResponse = await axios.get(
//           `https://api.themoviedb.org/3/movie/${movie.id}/images`,
//           {
//             headers: {
//               accept: "application/json",
//               Authorization:
//                 "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjE3MzkyNTMwNmVjY2RhNGNkNzljY2FjMjYxMjk0ZiIsInN1YiI6IjY2M2MwZTQwYTFjN2FkN2Y5MTMzOGEzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GAh4z-ksZTZPe1aDUzRKA9V1jFbEVUTi6wxAysOXSXw",
//             },
//           }
//         );
//         imagesData[movie.id] = imageResponse.data.backdrops;
//       }

//       setMovieImages(imagesData);
//     } catch (error) {
//       console.error('Error fetching movies:', error);
//     }
//   };

//   return { getAllMovies, movies, movieImages };
// }

import React, { useState } from 'react';
import axios from 'axios';

export default function useHome() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [movieImages, setMovieImages] = useState({});
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPage] = useState(1);

  const getAllMovies = async (type) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${type}?language=es-ES&page=${page}`,
        {
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjE3MzkyNTMwNmVjY2RhNGNkNzljY2FjMjYxMjk0ZiIsInN1YiI6IjY2M2MwZTQwYTFjN2FkN2Y5MTMzOGEzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GAh4z-ksZTZPe1aDUzRKA9V1jFbEVUTi6wxAysOXSXw',
          },
        }
      );

      if (type === 'popular') {
        setPopularMovies(response.data.results);
      } else if (type === 'top_rated') {
        setTopRatedMovies(response.data.results);
      }

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

      setMovieImages(prevImages => ({ ...prevImages, ...imagesData }));

    } catch (error) {
      console.error('Error fetching movies or images:', error);
    }
  };

  return { getAllMovies, popularMovies, topRatedMovies, movieImages };
}
