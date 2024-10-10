import { render, screen } from '@testing-library/react';
import SearchBar from '../../src/components/SearchBar';
import { vitest } from 'vitest';
import userEvent from '@testing-library/user-event';

const mockSetWord = vitest.fn();

// Function for rendering RearchBar and returning the 
const renderSearchBar = () => {
    render(<SearchBar setWord={mockSetWord} />);

    return {
        input: screen.getByPlaceholderText(/Enter a word/i),
        button: screen.getByRole('button', { name: /search/i }),
        mockSetWord
    }
}

describe('SearchBar', () => {
    it('should render an input field and button', () => {
        const { input, button } = renderSearchBar();

        expect(input).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    })

    it('should update input value and call setWord when button is clicked', async () => {
        const { input, button, mockSetWord } = renderSearchBar();
        const user = userEvent.setup();

        // Simulate typing into the input field using userEvent
        await user.type(input, 'word');

        // Verify that the input value is updated
        expect(input).toHaveValue('word');

        // Simulate click event on the button
        await user.click(button);

        // Verify that the setWord function was called
        expect(mockSetWord).toHaveBeenCalledWith('word');
    })
    it('should not call setWord if input field is empty', async () => {
        const { button, mockSetWord } = renderSearchBar();
        const user = userEvent.setup();

        // Simulate click event on the button without user type
        await user.click(button);

        // Verify that the setWord function was NOT called
        expect(mockSetWord).not.toHaveBeenCalledWith();

    })
})
