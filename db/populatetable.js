import tasks from '../data.js'
import query from './index.js'

async function populateTable() {
    for (const task of tasks) {
        const instruction = task.task
        const completed = task.completed
        console.log(task.completed)
        const res = await query(`INSERT INTO todo (task, completed) VALUES ($1, $2) RETURNING *;`, [instruction, completed])
        console.log(res)
    }
}

populateTable() 