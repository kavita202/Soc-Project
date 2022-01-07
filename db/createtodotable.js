import query from './index.js'
import moment from 'moment'
const sqlString = `CREATE TABLE IF NOT EXISTS tasks3
(id VARCHAR PRIMARY KEY,
name TEXT,
completed BOOLEAN DEFAULT FALSE,
deadline DATE NOT NULL DEFAULT CURRENT_DATE,
description text DEFAULT NULL
);`

async function createTaskTable() {
    const res = await query(sqlString)
    console.log(`Task table created: ${res}`)
}

createTaskTable() 