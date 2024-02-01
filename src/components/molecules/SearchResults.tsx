import React from 'react';
import {Paragraph} from '../atoms/paragraph/Paragraph';
import {Label} from '../atoms/label/Label';
import {Text} from '../atoms/text/Text';

import {Movie} from '../../types/Movie';

interface SearchResultsProps {
    movies: Movie[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ movies }) => {
    return (
        <div className="flex flex-wrap justify-center gap-4 p-4">
            {movies.map((movie, index) => (
                <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 bg-gray-800 rounded-lg">
                    <img src={movie.Poster} alt={movie.Title} className="w-full h-auto rounded-lg mb-4" />
                    <Label>Title:</Label> <Text>{movie.Title}</Text>
                    <Paragraph className="mt-2">
                        <Label>Year:</Label> <Text>{movie.Year}</Text>
                    </Paragraph>
                </div>
            ))}
        </div>
    );
};

export default SearchResults;