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
        <button onClick={toggleFavorite} aria-label={isFavorite(movie.imdbID) ? 'Remove from favorites' : 'Add to favorites'}>
            {isFavorite(movie.imdbID) ? (
                <div>
                    <FavoritesIcon />
                    <Label>Remove from Favorites</Label>
                </div>):
                (<div>
                    <NotInFavoritesIcon />
                    <Label>Add to Favorites</Label>
                </div>)}
        </button>
    );
};
