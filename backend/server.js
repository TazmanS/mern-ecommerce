import express from 'express';
import dotenv from 'dotenv';

// routes
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log('Express server started on port ' + PORT);
})