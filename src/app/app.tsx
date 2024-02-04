import React, { useState } from 'react';
import {MovieSearch} from 'components/molecules/MovieSearch/MovieSearch.tsx';
import {FavoritesDashboard} from '../components/organisms/FavoritesDashboard';
import Button from "components/atoms/button";

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
              <Button
                  onPress={toggleFavoritesDashboard}
                  label={showFavorites ? 'Hide Favorites List' : 'See Favorites List'}
                  theme="menu"
              />
          </header>
          {/* Content */}
          <div className="flex-grow container mx-auto px-4 sm:px-10 py-10">
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