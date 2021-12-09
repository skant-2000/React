import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { useState } from "react";

function Todo() {
  const [list, setList] = useState([]);

  const handleSubmit = ({ title, description }) => {
    const payload = {
      id: list.length + 1,
      title,
      description,
      status: false
    };
    setList([...list, payload]);
  };

  const handleDelete = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const toggleTask = (id) => {
    const updateStatus = list.map((item) => item.id === id ? {
      ...item, status: !list.status} : item 
      )
      console.log(list)
      setList(updateStatus)
  }
  return (
    <div>
      <TodoInput onSubmit={handleSubmit} />
      <TodoList data={list} handleDelete={handleDelete} toggleTask={toggleTask}/>
    </div>
  );
}

export default Todo;
