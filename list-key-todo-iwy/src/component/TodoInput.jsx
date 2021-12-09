import { useState } from "react";

function TodoInput({ onSubmit }) {
  const [state, setState] = useState({
    title: "",
    description: ""
  });

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const onAdd = () => {
    onSubmit(state);
  };

  return (
    <div>
      <div>
        <input
          placeholder="title"
          name="title"
          value={state.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          placeholder="description"
          name="description"
          value={state.description}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button onClick={onAdd}>ADD</button>
      </div>
    </div>
  );
}

export default TodoInput;