import query from './index.js'

const sqlString = `DROP TABLE tasks;`

async function deleteTable() {
    const res = await query(sqlString)
    console.log(`Table deleted`)
}

deleteTable() 