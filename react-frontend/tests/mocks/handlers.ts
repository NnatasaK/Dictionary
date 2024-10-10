import { http, HttpResponse } from 'msw';

export const handlers = [
    http.get(`${import.meta.env.VITE_API_URL}/dictionary/:word`, ({ params }) => {
        const { word } = params;

        if (word === 'test') {
            return HttpResponse.json({
                word: 'test',
                meanings: [{ definitions: [{ definition: 'Test definition' }] }],
                phonetics: [],
            });
        }

        return HttpResponse.json({ message: `No definition found for "${word}".` }, { status: 404 });
    }),
];
