import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// Set up the MSW server with the defined handlers
export const server = setupServer(...handlers);

// Added start and stop server in my setupTests file
