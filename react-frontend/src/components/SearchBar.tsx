import React, { useState } from 'react';

interface SearchBarProps {
    setWord: (word: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setWord }) => {
    const [input, setInput] = useState<string>('');

    const handleSearch = () => {
        if (input.trim()) {
            setWord(input);
        }
    };

    return (
        <div className="flex items-center space-x-4">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a word"
                className="p-2 border bg-gray-100 text-black rounded-md w-full"
            />
            <button onClick={handleSearch} className="px-4 py-2 bg-blue-500 text-white rounded-md">
                Search
            </button>
        </div>
    );
};

export default SearchBar;
