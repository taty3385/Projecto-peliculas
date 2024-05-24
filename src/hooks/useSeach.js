// hooks/useSeach.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useSeach() {
    const [searchQuery, setSearchQuery] = useState(""); 
   const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    const fetchMovies = async (query) => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?include_adult=false&query=${query}`,
                {
                    headers: {
                        accept: "application/json",
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjE3MzkyNTMwNmVjY2RhNGNkNzljY2FjMjYxMjk0ZiIsInN1YiI6IjY2M2MwZTQwYTFjN2FkN2Y5MTMzOGEzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GAh4z-ksZTZPe1aDUzRKA9V1jFbEVUTi6wxAysOXSXw",
                    },
                }
            );
            const data = await response.json();
            console.log(data);

            setSearchResults(data.results); 

            navigate("/search", { state: { searchResults: data.results } });
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    const handleSearchChange = (event) => {
        const { value } = event.target;
        setSearchQuery(value); 
    };

    return {
        searchQuery,
        searchResults,
        fetchMovies,
        handleSearchChange
    }
}
