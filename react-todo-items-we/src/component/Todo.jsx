import React from "react"
import {useState} from "react"
import Heading from "./Heading"
import Input from "./Input"
import Item from "./Item"

const Todo =  () => {
  const [todos, setTodos] = useState([])

  const handleTaskCreate = (title) => {
    const payload = {
      title: title,
      status: false,
      id: todos.length + 1
    };
    setTodos([...todos, payload])
  };
  console.log(todos)

  // Delete
  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id))
  }

  // Toggle
  const handleToggle = (id) => {
    const updatedTodos = todos.map((item) => item.id === id ? { ...item, status: !item.status } : item
    );
    setTodos(updatedTodos);
  }
  
  return (
    <>
      <div className="App">
        <Heading title={"TODO"}/>
        <Input onTaskCreate = {handleTaskCreate}/>
        {todos.map((todo) => (
          <Item 
          key = {todo.id} 
          id = {todo.id}
          title = {todo.title} 
          status = {todo.status}
          handleDelete = {handleDelete}
          handleToggle = {handleToggle} />
        ))}
      </div>
    </>
  );
}

export default Todo