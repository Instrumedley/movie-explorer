import React from 'react';
import {useFavorites} from 'hooks/useFavorites.ts';
import { Movie } from '../../types/Movie';
import {FavoritesIcon} from '../atoms/icons/FavoritesIcon';
import {NotInFavoritesIcon} from '../atoms/icons/NotInFavoritesIcon';
import {Label} from '../atoms/label/Label';

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
        <button onClick={toggleFavorite}>
            {isFavorite(movie.imdbID) ? (
                <div className="flex items-center space-x-2">
                    <FavoritesIcon />
                    <Label>Remove from Favorites</Label>
                </div>):
                (<div className="flex items-center space-x-2">
                    <NotInFavoritesIcon />
                    <Label>Add to Favorites</Label>
                </div>)}
        </button>
    );
};
