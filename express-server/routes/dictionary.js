import express from 'express';
import axios from 'axios';

const router = express.Router();

// Defining the route for dictionary API

router.get('/dictionary/:word', async (req, res) => {
    const { word } = req.params;

    try {
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        /* console.log(`Dictionary API response: ${JSON.stringify(response.data[0], null, 2)}`); */
        res.json(response.data[0]);
    } catch (error) {
        res.status(404).json({ message: `No definition found for "${word}".` });
    }
});


export default router;
