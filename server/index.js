import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
import postRoutes from './routes/posts.js'




const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on ${PORT}`)))
    .catch((error) => console.log(error.message));

//mongoose.set('useFindAndModify', false);