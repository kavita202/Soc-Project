import express from 'express';
import path from 'path';
import cookieParser  from 'cookie-parser';
import cors  from 'cors';
import logger  from 'morgan';
import compression from 'compression';
import router from './routes/tasks.js';
import helmet from 'helmet';

const connectionstring = process.env.HerokuDB_URI 
const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "chrome-extension://hdleilegamldlaonocomeooomiegchab");
  res.header("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression())
app.use(helmet())
app.use('/tasks', router);


app.use(function (req, res, next) {
  res.status(404).json({message: "We couldn't find what you were looking for 😞"})
})

export default app;
