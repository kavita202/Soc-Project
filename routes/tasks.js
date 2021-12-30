import express from "express";
const router = express.Router();
import {getAllTasks, createTask, updateTask, deleteTask, searchTasks } from '../models/tasks.js'
/* GET users listing. */
router.get("/", async function (req, res) {
  const search = req.query.search
  if (search) {
  const found = await searchTasks(search)
  res.json ({
    success: true,
    payload: found
  }) ;
  return 
  }
  const alltasks = await getAllTasks()
  res.json ({
    success: true,
    payload: alltasks
  })
})

router.post('/', async function (req, res){
   const task = req.body.task;
   const newTask = await createTask(task)
   res.json({
     success: true,
     payload: newTask
   })
})

router.patch('/', async function (req,res){
    const id = req.body.id
    const task = req.body.task;
    const updatedTask = await updateTask(id, task)
    res.json({
      success: true,
      payload: updatedTask
    })
})

router.delete('/:id', async function (req, res) {
  const id = req.params.id
  const deletedTask = await deleteTask(id)
  res.json({
    success: true,
    payload: deletedTask
  })
})


export default router;
