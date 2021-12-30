import React, { useState} from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { nanoid } from "nanoid";
// define outside as we do not want them to be recalculated everytime App is re-rendered. 
const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};

// the Object.keys returns an array 
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('All');

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new obkect
        // whose `completed` prop has been inverted
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...tasks, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  // apply the filter to the tasks before mapping the tasks to do 
  const taskList = tasks.filter(FILTER_MAP[filter]).map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton 
    key={name} 
    name={name}
    isPressed={name === filter}
    setFilter={setFilter}
    />
  ));

  function addTask(name) {
    const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }
  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `Remaining ${tasksNoun}: ${taskList.length}`;

    return (
    <div className="todoapp stack-large">
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          Today's Tasks
        </label>
      </h2>
      <div className="filters btn-group stack-exception">{filterList}</div>
      <h3 id="list-heading" >{headingText}</h3>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
      <Form addTask={addTask} />
    </div>
  );
}

export default App;
