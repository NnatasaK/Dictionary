

describe('Server performance', () => {
    it('should respond within a reasonable time', async () => {
        const start = Date.now(); // Start timer

        // Use the full API URL with process.env
        const response = await fetch(`${import.meta.env.VITE_API_URL}/dictionary/test`);

        const end = Date.now(); // End timer

        const responseTime = end - start; // Calculate response time

        expect(responseTime).toBeLessThan(200); // Check if response time is under 200ms (adjust as needed)
        expect(response.ok).toBeTruthy(); // Check if response is OK
    });
});
