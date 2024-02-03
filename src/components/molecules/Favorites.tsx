import React from 'react';
import {useFavorites} from 'hooks/useFavorites.ts';
import { Movie } from '../../types/Movie';

interface FavoritesProps {
    movie: Movie;
}

export const Favorites: React.FC<FavoritesProps> = ({ movie }) => {
    const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

    const handleFavoriteClick = () => {
        if (isFavorite(movie.imdbID)) {
            removeFromFavorites(movie.imdbID);
        } else {
            addToFavorites(movie);
        }
    };

    return (
        <button onClick={handleFavoriteClick}>
            {isFavorite(movie.imdbID) ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
    );
};
