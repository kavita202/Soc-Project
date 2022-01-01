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
   const id = req.body.id
   const name = req.body.name;
   console.log(req)
   console.log('post req received')

   const newTask = await createTask(id, name)
   res.json({
     success: true,
     payload: newTask
   })
})

router.patch('/', async function (req,res){
    const id = req.body.id
    const name = req.body.name;
    console.log(id,name)
    const updatedTask = await updateTask(id, name)
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
