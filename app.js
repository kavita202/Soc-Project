import express from 'express';
import path from 'path';
import cookieParser  from 'cookie-parser';
import cors  from 'cors';
import logger  from 'morgan';

import router from './routes/tasks.js';

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/tasks', router);

app.use(function (req, res, next) {
  res.status(404).json({message: "We couldn't find what you were looking for 😞"})
})


export default app;
