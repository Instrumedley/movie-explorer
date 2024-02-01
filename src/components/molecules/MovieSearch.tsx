import React, { useState } from 'react';
import SearchBar from '../atoms/SearchBar';
import SearchResults from "components/molecules/SearchResults.tsx";
import axios from 'axios';
import { Movie } from '../../types/Movie';

const MovieSearch: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    const searchMovies = async (query: string) => {
        const apiKey = 'c1c9953e'; // TODO: add to .env file
        const url = `http://www.omdbapi.com/?t=${encodeURIComponent(query)}&apikey=${apiKey}`;

        try {
            const response = await axios.get(url);
            const searchResults = response.data || []
            const moviesArray = Array.isArray(searchResults) ? searchResults : [searchResults];
            setMovies(moviesArray);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    return (
        <div>
            <SearchBar onSearch={searchMovies} />
            <SearchResults movies={movies} />
        </div>
    );
};

export default MovieSearch;
