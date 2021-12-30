import pg from "pg";
import * as config from '../config/config.js'

const pool = new pg.Pool({
  //Heroku credentials are now environment variables
    ssl: { rejectUnauthorized: false},
  });

export default function query(text, params) {
    return pool.query(text, params)
}