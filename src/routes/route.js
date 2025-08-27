import express from 'express';
import upload from '../utils/upload.js';
import {
    generateText,
    generateFromImage,
    generateFromDocument,
    generateFromAudio
} from '../controllers/controller.js';

const router = express.Router();

router.post('/generate-text', generateText);
router.post('/generate-from-image', upload.single('image'), generateFromImage);
router.post('/generate-from-document', upload.single('document'), generateFromDocument);
router.post('/generate-from-audio', upload.single('audio'), generateFromAudio);

export default router;
