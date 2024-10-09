import { ThemeToggleProps } from "../types/types";

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
    return (
        <button onClick={toggleTheme} className="px-4 py-2 bg-gray-700 text-white rounded-md mb-4">
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
    );
};

export default ThemeToggle;
