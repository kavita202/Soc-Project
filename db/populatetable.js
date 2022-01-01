import tasks from '../data.js'
import query from './index.js'

async function populateTable() {
    for (const task of tasks) {
        const instruction = task.name
        const completed = task.completed
        console.log(task.name)
        console.log(task.completed)
        const res = await query(`INSERT INTO tasks3 (name, completed) VALUES ($1, $2) RETURNING *;`, [instruction, completed])
        console.log(res.rows)
    }
}

populateTable() 