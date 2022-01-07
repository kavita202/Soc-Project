import query from "../db/index.js";

export async function getAllTasks() {
  const data = await query(`SELECT * FROM tasks3;`);
  return data.rows;
}

export async function getTodaysTasks() {
  const data = await query(
    `SELECT * FROM tasks3 WHERE deadline = CURRENT_DATE;`
  );
  return data.rows;
}

export async function deleteTask(id) {
  const data = await query(`DELETE FROM tasks3 WHERE id = $1 RETURNING *;`, [
    id,
  ]);
  return data.rows;
}

export async function updateTaskId(id, newname) {
  const data = await query(
    `UPDATE tasks3 SET name = $1 WHERE id = $2 RETURNING *`,
    [newname, id]
  );
  return data.rows;
}
export async function updateTaskDeadline(id, deadline) {
  const data = await query(
    `UPDATE tasks3 SET deadline = $1 WHERE id = $2 RETURNING *`,
    [deadline, id]
  );
  console.log("here:", data.rows);
  return data.rows;
}

export async function createTask(id, name) {
  const data = await query(
    `INSERT INTO tasks3 (id, name) VALUES ($1, $2) RETURNING *;`,
    [id, name]
  );
  return data.rows;
}

// query string
export async function searchTasks(search) {
  const data = await query(
    `SELECT * FROM tasks3 WHERE name ILIKE '%' || $1 || '%';`,
    [search]
  );
  return data.rows;
}
