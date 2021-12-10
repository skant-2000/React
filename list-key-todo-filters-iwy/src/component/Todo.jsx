import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { useState } from "react";

function Todo() {
  const [list, setList] = useState([]);
  const [showCompleted, setShowCompleted] = useState(true);

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
    const updateStatus = list.map((item) =>
      item.id === id
        ? {
            ...item,
            status: !item.status
          }
        : item
    );
    setList(updateStatus);
    console.log(list);
  };

  // const handleShowCompleted = () => {};

  return (
    <div>
      <TodoInput onSubmit={handleSubmit} />
      <TodoList
        data={list}
        handleDelete={handleDelete}
        toggleTask={toggleTask}
      />
      <button onClick={() => setShowCompleted(!showCompleted)}>
        {showCompleted ? "Show Completed" : "Hide Completed"}
      </button>
      {showCompleted && <TodoList data={list.filter((item) => item.status)} /> }
    </div>
  );
}

export default Todo;
