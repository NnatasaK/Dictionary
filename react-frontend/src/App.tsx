import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import DefinitionDisplay from './components/DefinitionDisplay';
import FavoriteWords from './components/FavoriteWors';
import ThemeToggle from './components/ThemeToggle';
import './index.css'

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [word, setWord] = useState<string>('');
  const [definition, setDefinition] = useState<any>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const addFavoriteWord = (favoriteWord: string) => {
    setFavorites((prevFavorites) => [...prevFavorites, favoriteWord]);
  };

  return (
    <div className={`${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'} min-h-screen p-6`}>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <div className="max-w-3xl  mx-auto space-y-6">
        <SearchBar setWord={setWord} />
        <DefinitionDisplay word={word} definition={definition} setDefinition={setDefinition} addFavoriteWord={addFavoriteWord} />
        <FavoriteWords favorites={favorites} />
      </div>
    </div>
  );
};

export default App;
