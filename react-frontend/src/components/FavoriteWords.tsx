import { FavoriteWordsProps } from "../types/types";


const FavoriteWords: React.FC<FavoriteWordsProps> = ({ favorites }) => {
    return (
        <div className="space-y-2">
            <h3 className="text-xl font-bold">Favorite Words</h3>
            {favorites.length === 0 ? (
                <p className="text-gray-500">No favorite words yet.</p>
            ) : (
                <ul className="list-disc pl-5">
                    {favorites.map((word, index) => (
                        <li key={index} className="text-lg">{word}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FavoriteWords;
