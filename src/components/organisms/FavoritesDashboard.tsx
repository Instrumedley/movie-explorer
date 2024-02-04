import React from 'react';
import {useFavorites} from "hooks/useFavorites.ts";
import { Movie } from '../../types/Movie';
import Button from "components/atoms/button";

export const FavoritesDashboard: React.FC = () => {
    const { favorites, removeFromFavorites } = useFavorites();

    return (
        <div className="bg-gray-600 text-white min-h-screen p-4">
            <h2 className="text-xl font-bold mb-4">Favorites List</h2>
            <div className="responsive-table">
                <table className="table-auto w-full">
                    <thead>
                    <tr className="border-b border-orange-500">
                        <th className="px-4 py-2">Poster</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Year</th>
                        <th className="px-4 py-2">IMDb Rating</th>
                        <th className="px-4 py-2">Plot</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {favorites.map((movie: Movie) => (
                        <tr key={movie.imdbID} className="border-b border-orange-400">
                            <td className="px-4 py-2"><img src={movie.Poster} alt={movie.Title} className="w-12 h-auto" /></td>
                            <td className="px-4 py-2">{movie.Title}</td>
                            <td className="px-4 py-2">{movie.Year}</td>
                            <td className="px-4 py-2">{movie.imdbRating}</td>
                            <td className="px-4 py-2">{movie.Plot}</td>
                            <td className="px-4 py-2">
                                <Button
                                    onPress={() => removeFromFavorites(movie.imdbID)}
                                    label="Remove"
                                    theme="red"
                                    size="small"
                                />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            {favorites.length === 0 && (
                <div className="text-center py-4">No favorites added yet.</div>
            )}
        </div>
    );
};
