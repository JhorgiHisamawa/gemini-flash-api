import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

const GEMINI_MODEL = 'gemini-2.5-flash';

export const generateAIContent = async (contents) => {
    return await ai.models.generateContent({
        model: GEMINI_MODEL,
        contents
    });
};
