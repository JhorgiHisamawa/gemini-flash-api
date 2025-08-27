import 'dotenv/config';
import express from 'express';
import aiRoutes from './src/routes/route.js';

const app = express();

app.use(express.json());

// Routes
app.use('/api/ai', aiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
