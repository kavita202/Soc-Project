import query from './index.js'

const sqlString = `CREATE TABLE IF NOT EXISTS todo
(id SERIAL PRIMARY KEY,
task TEXT,
completed BOOLEAN DEFAULT FALSE
);`

async function createTaskTable() {
    const res = await query(sqlString)
    console.log(`Task table created: ${res}`)
}

createTaskTable() 