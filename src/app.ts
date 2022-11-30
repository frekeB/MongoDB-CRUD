import express from 'express';
import logger from 'morgan';
import todoRouter from './routes/todoRoute';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

mongoose.connect(process.env.DATABASE_URL!, () => {
    console.log("Connected to database");
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/todo', todoRouter);

app.listen(4080, () => {
    console.log('Server is running on port 4080');
});

export default app;