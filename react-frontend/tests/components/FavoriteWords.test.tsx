import { render, screen } from '@testing-library/react';
import FavoriteWords from '../../src/components/FavoriteWords';

const renderComponent = (favorites: string[]) => {
    render(<FavoriteWords favorites={favorites} />);

    return {
        /* header: screen.getAllByText(/favorite words/i), */
        emptyMessage: screen.queryByText(/no favorite words yet/i),
        listItems: screen.queryAllByRole('listitem'),
    };
};

describe('FavoriteWords', () => {

    //Test that the empty message is displayed when no favorites are present
    it('should display empty message when no favorite words', /* async */() => {
        const { emptyMessage, listItems } = renderComponent([]);

        /* await waitFor(() => { */
        expect(emptyMessage).toBeInTheDocument();
        expect(listItems).toHaveLength(0);
        /*  }); */

        ;
    });

    // Test that favorite words are displayed when the favorites array is not empty
    it('should display a list of favorite words', () => {

        const favorites = ['word1', 'word2', 'word3'];
        const { emptyMessage, listItems } = renderComponent(favorites);

        expect(emptyMessage).not.toBeInTheDocument();
        expect(listItems).toHaveLength(favorites.length);

        // Check that the list items contain the correct words
        favorites.forEach((word, index) => {

            expect(listItems[index]).toHaveTextContent(word);

        });
    });
})
