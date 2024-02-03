import React, { useState } from 'react';
import SearchBar from '../atoms/SearchBar';
import SearchResults from "components/molecules/SearchResults.tsx";
import axios from 'axios';
import { Movie } from '../../types/Movie';

const MovieSearch: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [error, setError] = useState<string | null>(null);
    const searchMovies = async (query: string) => {
        const apiKey = 'c1c9953e'; // TODO: add to .env file
        const url = `http://www.omdbapi.com/?t=${encodeURIComponent(query)}&apikey=${apiKey}`;

        try {
            const response = await axios.get(url);
            if (response.data.Response === "True") {
                const searchResults = response.data || []
                const moviesArray = Array.isArray(searchResults) ? searchResults : [searchResults];
                setMovies(moviesArray);
                setError(null);
            }
            else {
                setError(response.data.Error);
                setMovies([]);
            }
        } catch (error) {
            console.error('Error fetching data: ', error);
            setError('An unexpected error occurred');
        }
    };

    return (
        <div>
            <SearchBar onSearch={searchMovies} />
            <SearchResults movies={movies} error={error} />
        </div>
    );
};

export default MovieSearch;
