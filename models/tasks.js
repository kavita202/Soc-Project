import query from '../db/index.js'

export async function getAllTasks() {
    const data = await query(`SELECT * FROM todo;`)
   return (data.rows)
}

export async function deleteTask(id) {
    const data = await query(`DELETE FROM todo WHERE id = $1 RETURNING *;`, [id])
    return data.rows
}

export async function updateTask(id, newtask) {
    const data = await query(`UPDATE todo SET task = $1 WHERE id = $2 RETURNING *`, [newtask, id])
    return data.rows
}


export async function createTask(task) {
    const data = await query(`INSERT INTO todo (task) VALUES ($1) RETURNING *;`, [task])
    return data.rows
}


// query string 
export async function searchTasks(search) {
    const data = await query(`SELECT * FROM todo WHERE task ILIKE '%' || $1 || '%';`, [search])
    return data.rows
  }

