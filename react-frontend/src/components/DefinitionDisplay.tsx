import React, { useEffect } from 'react';
import axios from 'axios';

interface DefinitionDisplayProps {
    word: string;
    definition: Definition | null;
    setDefinition: (definition: Definition | null) => void;
    addFavoriteWord: (word: string) => void;
}

interface Definition {
    word: string;
    phonetics: Phonetic[];
    meanings: Meaning[];
}

interface Phonetic {
    text: string;
    audio: string;
}

interface Meaning {
    partOfSpeech: string;
    definitions: { definition: string; example?: string }[];
}

const apiUrl = import.meta.env.VITE_API_URL || '';

const DefinitionDisplay: React.FC<DefinitionDisplayProps> = ({ word, definition, setDefinition, addFavoriteWord }) => {
    useEffect(() => {
        if (word) {
            // Sending a request to the backend API
            axios
                .get(`${apiUrl}/dictionary/${word}`)
                .then((response) => setDefinition(response.data))
                .catch(() => setDefinition(null));
        }
    }, [word, setDefinition]);

    if (!word) return null;

    // If no definition was found, display a message
    if (!definition) return <p className="text-red-500">No definition found for "{word}".</p>;

    // Safeguards for accessing meanings, phonetics, and definitions
    const meanings = definition.meanings || [];
    const phonetics = definition.phonetics || [];
    const firstPhonetic = phonetics.find((p: Phonetic) => p.audio); // Now typed

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold">{definition.word}</h2>

            {/* Display the first definition */}
            {meanings.length > 0 && meanings[0].definitions.length > 0 ? (
                <p className="text-lg">{meanings[0].definitions[0].definition}</p>
            ) : (
                <p className="text-lg">Definition not available.</p>
            )}

            {/* Display phonetic pronunciation button if audio exists */}
            {firstPhonetic?.audio && (
                <button onClick={() => new Audio(firstPhonetic.audio).play()} className="px-4 py-2 bg-green-500 text-white mr-4 rounded-md">
                    Play Pronunciation
                </button>
            )}

            {/* Add to Favorites button */}
            <button onClick={() => addFavoriteWord(definition.word)} className="px-4 py-2 bg-yellow-500 text-white rounded-md">
                Add to Favorites
            </button>
        </div>
    );
};

export default DefinitionDisplay;
