import '@testing-library/jest-dom/vitest';
import { server } from './mocks/server';
import { afterAll, afterEach, beforeAll } from 'vitest';


HTMLMediaElement.prototype.play = vi.fn();


beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());