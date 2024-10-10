//itr
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeToggle from '../../src/components/ThemeToggle';
import { vi } from 'vitest';

// Mocked function for theme toggling
const mockToggleTheme = vi.fn();

// Function to render the ThemeToggle component (refactored)
const renderComponent = (theme: 'light' | 'dark') => {
    render(<ThemeToggle theme={theme} toggleTheme={mockToggleTheme} />);

    // Return elements for testing 
    return {
        button: screen.getByText(theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'),
    };
};

describe('ThemeToggle Component', () => {

    // Test for rendering the correct label based on the "light" theme
    it('should render the correct button label for the "light" theme', () => {
        const { button } = renderComponent('light');
        expect(button).toHaveTextContent('Switch to Dark Theme');
    });

    // Test for rendering the correct label based on the "dark" theme
    it('should render the correct button label for the "dark" theme', () => {
        const { button } = renderComponent('dark');
        expect(button).toHaveTextContent('Switch to Light Theme');
    });

    // Test for button click functionality
    it('should call toggleTheme when the button is clicked', () => {
        const { button } = renderComponent('light');

        // Simulate a click event on the button
        fireEvent.click(button);

        // Ensure the mock function is called
        expect(mockToggleTheme).toHaveBeenCalledTimes(1);
    });
});
