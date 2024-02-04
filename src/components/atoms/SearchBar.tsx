import React, { useState } from 'react';
import Button from "components/atoms/button";

export const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSearch} className="flex justify-center mt-4">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search for a movie..."
                className="w-full p-2 rounded-l-lg text-gray-700 bg-gray-800 border-0"
            />
            <Button onPress={handleSearch} theme="regular" label="Search" />
        </form>
    );
};
