import React, { useState } from 'react';
import { Movie } from '../../types/Movie';
import MovieDetailsModal from '../molecules/MovieDetailsModal'; // Path to the modal component

interface SeeDetailsProps {
    movie: Movie;
}

export const SeeDetails: React.FC<SeeDetailsProps> = ({ movie }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <>
            <button onClick={handleOpenModal} className="text-blue-500 hover:text-blue-700">See Details</button>
            {isModalOpen && <MovieDetailsModal movie={movie} onClose={handleCloseModal} />}
        </>
    );
};
