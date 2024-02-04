import { useState, useEffect } from 'react';
import { Movie } from '../types/Movie';

export const useFavorites = () => {
    const [favorites, setFavorites] = useState<Movie[]>([]);

    useEffect(() => {
        const loadedFavorites = localStorage.getItem('favorites');
        if (loadedFavorites) {
            setFavorites(JSON.parse(loadedFavorites));
        }
    }, []);

    const addToFavorites = (movie: Movie) => {
        const updatedFavorites = [...favorites, movie];
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    const removeFromFavorites = (movieId: string) => {
        const updatedFavorites = favorites.filter(movie => movie.imdbID !== movieId);
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    const isFavorite = (movieId: string) => {
        return favorites.some(movie => movie.imdbID === movieId);
    };

    return { favorites, addToFavorites, removeFromFavorites, isFavorite };
};
