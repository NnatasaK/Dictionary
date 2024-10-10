import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import DefinitionDisplay from '../../src/components/DefinitionDisplay';
import { server } from '../mocks/server';
import { http, HttpResponse } from 'msw';

// Mock helper functions
const mockSetDefinition = vi.fn();
const mockAddFavoriteWord = vi.fn();

HTMLMediaElement.prototype.play = vi.fn();

// Function to render the component and return elements
const renderDefinitionDisplay = (word: string, definition: any = null) => {
    render(
        <DefinitionDisplay
            word={word}
            definition={definition}
            setDefinition={mockSetDefinition}
            addFavoriteWord={mockAddFavoriteWord}
        />
    );
    return {
        definitionText: screen.queryByText(word),
        definitionMessage: screen.queryByText(/no definition found/i),
        playButton: screen.queryByText(/play pronunciation/i),
        favoriteButton: screen.queryByText(/add to favorites/i),
    };
};

// Test cases
describe('DefinitionDisplay Component', () => {
    const mockDefinition = {
        word: 'test',
        meanings: [{ definitions: [{ definition: 'Test definition.' }] }],
        phonetics: [{ audio: 'https://test-audio.mp3' }],
    };

    it('should fetch and display a definition from the API', async () => {
        mockSetDefinition.mockImplementationOnce(() => mockDefinition);
        const { definitionText } = renderDefinitionDisplay('test', mockDefinition);

        await waitFor(() => {
            expect(definitionText).toBeInTheDocument();
            expect(screen.getByText(/Test definition/i)).toBeInTheDocument();
        });
    });

    it('should display an error message if the word is not found', async () => {
        server.use(
            http.get('/dictionary/word', ({ params }) => {
                return HttpResponse.json({ message: `No definition found for "${params.word}".` }, { status: 404 });
            })
        );

        const { definitionMessage } = renderDefinitionDisplay('nonexistentWord');

        // Wait for the mock API to respond with a 404
        await waitFor(() => {
            expect(definitionMessage).toBeInTheDocument();
        });
    });

    it('should render the Play Pronunciation button if phonetic audio exists', async () => {
        const { playButton } = renderDefinitionDisplay('test', mockDefinition);

        fireEvent.click(playButton!); // Simulate clicking the Play Pronunciation button
    });

    it('should call addFavoriteWord when Add to Favorites button is clicked', async () => {
        const { favoriteButton } = renderDefinitionDisplay('test', mockDefinition);


        fireEvent.click(favoriteButton!);

        expect(mockAddFavoriteWord).toHaveBeenCalledWith('test');
    });
});
