import React from 'react';
import {useFavorites} from 'hooks/useFavorites.ts';
import { Movie } from '../../types/Movie';
import {FavoritesIcon} from '../atoms/icons/FavoritesIcon';
import {NotInFavoritesIcon} from '../atoms/icons/NotInFavoritesIcon';
import Button from '../atoms/button/'

interface FavoritesProps {
    movie: Movie;
}

export const Favorites: React.FC<FavoritesProps> = ({ movie }) => {
    const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

    const toggleFavorite = () => {
        if (isFavorite(movie.imdbID)) {
            removeFromFavorites(movie.imdbID);
        } else {
            addToFavorites(movie);
        }
    };


    return (
        <Button
            onPress={toggleFavorite}
            icon={isFavorite(movie.imdbID) ? <FavoritesIcon /> : <NotInFavoritesIcon />}
            label={isFavorite(movie.imdbID) ? 'Remove from Favorites' : 'Add to Favorites'}
        />
    );
};
