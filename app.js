import express from 'express';
import path from 'path';
import cookieParser  from 'cookie-parser';
import cors  from 'cors';
import logger  from 'morgan';
import compression from 'compression';
import router from './routes/tasks.js';
import helmet from 'helmet';

const dev_db_url = "postgres://clhitcgcbvtcnd:de1a70d2337fe6c30c432808b64a070a17353dd05034e1171d6a9bb7d1b805b2@ec2-54-229-68-88.eu-west-1.compute.amazonaws.com:5432/d404vmp998b4h9"

const connectionstring = process.env.HerokuDB_URI || dev_db_url; 
const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression())
app.use(helmet())
app.use('/tasks', router);

app.get("/", async function (req, res) {
  res.json ({
    success: true,
    payload: 'Your request has been recieved'
  })
})


app.use(function (req, res) {
  res.status(404).json({message: "We couldn't find what you were looking for 😞"})
})

export default app
