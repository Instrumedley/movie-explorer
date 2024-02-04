import React, { useState } from 'react';
import {MovieSearch} from '../components/molecules/MovieSearch';
import {FavoritesDashboard} from '../components/organisms/FavoritesDashboard';

const App: React.FC = () => {
    const [showFavorites, setShowFavorites] = useState(false);

    const toggleFavoritesDashboard = () => {
        setShowFavorites(!showFavorites);
    };
  return (
      <div className="app bg-gray-900 min-h-screen text-white">
          <header className="flex justify-between items-center p-4 bg-gray-800">
              <h1 className="text-3xl text-orange-500 font-bold">
                  Movie Explorer
              </h1>
              <button
                  onClick={toggleFavoritesDashboard}
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                  {showFavorites ? 'Hide Favorites List' : 'See Favorites List'}
              </button>
          </header>
          {/* Content */}
          <div className="flex-grow container mx-auto px-4 py-10">
              {showFavorites ? (
                  <FavoritesDashboard />
              ) : (
                  <MovieSearch />
              )}
          </div>
      </div>
  );
};

export default App;