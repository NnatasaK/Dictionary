import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Helloo, world!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
