import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/user.routes.js';
import cors from 'cors';

dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 5001;

app.get('/', (req, res) => {
  res.send('Hello, SmartBuy App Backend!');
});

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});