function TodoList({ data, handleDelete, toggleTask }) {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          {item.title} - {item.description} - {item.status ? "DONE" : "PENDING"}
          <button onClick={() => handleDelete(item.id)}>X</button>
          <button onClick={() => toggleTask(item.id)}>Toggle Task</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;