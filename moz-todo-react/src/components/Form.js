import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // if they enter a name that does not exist
    if (!name.trim()) {
      return
    }
    props.addTask(name)
    // clear input after submitting
    setName(" ")
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;