import React, { useState } from 'react';
import SearchBar from '../components/atoms/SearchBar';
import axios from 'axios';

const MovieSearch: React.FC = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (query: string) => {
    const apiKey = 'c1c9953e'; // Should ideally be an environment variable
    const url = `http://www.omdbapi.com/?t=${encodeURIComponent(query)}&apikey=${apiKey}`;

    try {
      const response = await axios.get(url);
      setMovies(response.data.Search); // Handle the response as needed for your application
    } catch (error) {
      console.error('Error fetching data: ', error);
      // Handle error state
    }
  };

  return (
      <div>
        <SearchBar onSearch={searchMovies} />
        {/* Render search results here */}
      </div>
  );
};

export default MovieSearch;
