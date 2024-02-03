import React from 'react';
import { Movie } from '../../types/Movie';
import {Paragraph} from "components/atoms/paragraph/Paragraph.tsx";
import {Label} from "components/atoms/label/Label.tsx";
import {Text} from "components/atoms/text/Text.tsx";

interface MovieDetailsModalProps {
    movie: Movie;
    onClose: () => void;
}

const MovieDetailsModal: React.FC<MovieDetailsModalProps> = ({ movie, onClose }) => {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" onClick={onClose}>
            <div className="relative top-20 mx-auto p-5 border w-3/4 shadow-lg rounded-md bg-white" onClick={e => e.stopPropagation()}>
                <div className="flex">
                    <img src={movie.Poster} alt={movie.Title} className="w-1/2" />
                    <div className="flex flex-col justify-between ml-4">
                        <h2 className="text-xl font-bold text-orange-600 text-center">{movie.Title} ({movie.Year})</h2>
                        <Text className="text-stone-700">{movie.Plot}</Text>
                        <Paragraph><Label>Genre:</Label>{movie.Genre}</Paragraph>
                        <Paragraph><Label>Director:</Label>{movie.Director}</Paragraph>
                        <Paragraph><Label>Main Actors:</Label>{movie.Actors}</Paragraph>
                        <Paragraph><Label>Country: </Label>{movie.Country}</Paragraph>
                        <Paragraph><Label>Writer: </Label>{movie.Writer}</Paragraph>
                        <Paragraph><Label>Language: </Label>{movie.Language}</Paragraph>
                        <Paragraph><Label>Awards: </Label>{movie.Awards}</Paragraph>
                        <Paragraph><Label>IMDb Rating: </Label>{movie.imdbRating}</Paragraph>
                        <Paragraph><Label>IMDb Votes: </Label>{movie.imdbVotes}</Paragraph>

                        <button onClick={onClose} className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetailsModal;