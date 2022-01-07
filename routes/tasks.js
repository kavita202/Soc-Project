import express from "express";
const router = express.Router();
import {getTodaysTasks, getAllTasks, createTask, updateTaskId, updateTaskDeadline, deleteTask, searchTasks } from '../models/tasks.js'
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
  const scheduled = req.query.scheduled
  if (scheduled) {
  const found = await getAllTasks()
  res.json ({
    success: true,
    payload: found
  }) ;
  return 
  }
  const alltasks = await getTodaysTasks()
  console.log(alltasks)
  res.json ({
    success: true,
    payload: alltasks
  })
})

router.post('/', async function (req, res){
   const id = req.body.id
   const name = req.body.name;

   const newTask = await createTask(id, name)
   res.json({
     success: true,
     payload: newTask
   })
})

router.patch('/', async function (req,res){
    const id = req.body.id
    const name = req.body.name
    const updatedTask = await updateTaskId(id, name)
    res.json({
      success: true,
      payload: updatedTask
    })
  })


router.patch('/cal', async function (req,res){
  const id = req.body.id
  let deadline = req.body.deadline
  deadline = deadline.substring(0,10)
  console.log(deadline)
  const updatedTask = await updateTaskDeadline(id, deadline)
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
