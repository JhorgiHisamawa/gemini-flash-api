import { generateAIContent } from '../services/service.js';
import extractText from '../utils/extract_text.js';

export const generateText = async (req, res) => {
    try {
        const { prompt } = req.body;
        const resp = await generateAIContent([{ text: prompt }]);
        res.json({ result: extractText(resp) });
    } catch (error) {
        console.error("Error generating text:", error);
        res.status(500).json({ error: error.message });
    }
};

export const generateFromImage = async (req, res) => {
    try {
        const { prompt } = req.body;
        const imageBase64 = req.file.buffer.toString('base64');
        const resp = await generateAIContent([
            { text: prompt },
            { inlineData: { mimeType: req.file.mimetype, data: imageBase64 } }
        ]);
        res.json({ result: extractText(resp) });
    } catch (error) {
        console.error("Error generating from image:", error);
        res.status(500).json({ error: error.message });
    }
};

export const generateFromDocument = async (req, res) => {
    try {
        const { prompt } = req.body;
        const docBase64 = req.file.buffer.toString('base64');
        const resp = await generateAIContent([
            { text: prompt || "Please summarize the following document:" },
            { inlineData: { mimeType: req.file.mimetype, data: docBase64 } }
        ]);
        res.json({ result: extractText(resp) });
    } catch (error) {
        console.error("Error generating from document:", error);
        res.status(500).json({ error: error.message });
    }
};

export const generateFromAudio = async (req, res) => {
    try {
        const { prompt } = req.body;
        const audioBase64 = req.file.buffer.toString('base64');
        const resp = await generateAIContent([
            { text: prompt || "Please summarize the following audio:" },
            { inlineData: { mimeType: req.file.mimetype, data: audioBase64 } }
        ]);
        res.json({ result: extractText(resp) });
    } catch (error) {
        console.error("Error generating from audio:", error);
        res.status(500).json({ error: error.message });
    }
};
