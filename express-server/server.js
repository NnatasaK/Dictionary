import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dictionaryRoute from './routes/dictionary.js'


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Defining the port
const PORT = process.env.PORT || 3000;

app.use(cors());

//Using the route i defined in routes/dictionary.js
app.use('/api', dictionaryRoute);



app.get('/', (req, res) => {
    res.send('Helloo, world!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
