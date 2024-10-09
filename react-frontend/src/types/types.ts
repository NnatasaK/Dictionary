// types for DefinitionDisplay

export interface DefinitionDisplayProps {
    word: string;
    definition: Definition | null;
    setDefinition: (definition: Definition | null) => void;
    addFavoriteWord: (word: string) => void;
}

export interface Definition {
    word: string;
    phonetics: Phonetic[];
    meanings: Meaning[];
}

export interface Phonetic {
    text: string;
    audio: string;
}

export interface Meaning {
    partOfSpeech: string;
    definitions: { definition: string; example?: string }[];
}

// Types for Search

export interface SearchBarProps {
    setWord: (word: string) => void;
}

// Types for FavoriteWord

export interface FavoriteWordsProps {
    favorites: string[];
}

// Types for ThemeToggle

export interface ThemeToggleProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

