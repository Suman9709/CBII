import express from 'express'
import cors from 'cors'
import { addToSheet } from './Utils/api.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/add-to-sheet', async (req, res) => {
    try {
        const { data } = req.body

        if (!Array.isArray(data) || data.length === 0) {
            return res.status(400).json({ message: "Invalid data format. Expecting non-empty array." });
        }


        await addToSheet(data);
        console.log(data);

        res.status(200).json({ message: "Data added to sheet Successfully." });
    } catch (error) {
        console.error("Error adding to sheet", error)
        res.status(500).json({ message: "Failed to add daat to sheet" })
    }
});

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})