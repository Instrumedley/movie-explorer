import React, { useState } from 'react';
import { Movie } from '../../types/Movie';
import MovieDetailsModal from '../molecules/MovieDetailsModal';
import Button from '../atoms/button/';

interface SeeDetailsProps {
    movie: Movie;
}

export const SeeDetails: React.FC<SeeDetailsProps> = ({ movie }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <div className="flex justify-start mt-10">
            <Button onPress={handleOpenModal} theme="linkButton" label="See Details" />
            {isModalOpen && <MovieDetailsModal movie={movie} onClose={handleCloseModal} />}
        </div>
    );
};
