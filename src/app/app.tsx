import React from 'react';
import MovieSearch from '../components/molecules/MovieSearch';

const App: React.FC = () => {
  return (
      <div className="app bg-gray-900 min-h-screen text-white">
        <div className="container mx-auto px-4 py-10">
          <h1 className="text-3xl text-center text-orange-500 font-bold mb-6">
            Movie Explorer
          </h1>
          <MovieSearch />
        </div>
      </div>
  );
};

export default App;