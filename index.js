import express from "express";
import mongoose from 'mongoose';
import { MONGO_URI } from './config/keys.js'
import { plans } from './routes/plans.js';

const app = express();

app.use(express.json());

mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}) // key to data base, just requires us to use the second arg
  .then(() => console.log('MongoDB Connected!'))
  .catch(err => console.log(err))

app.get('/firstwordsaidonline', (_, res) => res.send('lo'));

app.use('/plans', plans)
// TODO: Create + Ignore .config

app.listen(5001, () => console.log('Planning App is running on port 5001!'))
