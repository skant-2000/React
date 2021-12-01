import {useState} from "react";

const Input = ({onTaskCreate}) => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleClick = () => {
    onTaskCreate(text)
  }

  return (
    <>
      <input
        type = "text"
        placeholder = "Type Something"
        value = {text}
        onChange = {handleChange}
      />
      <button  onClick={handleClick}>ADD</button>
    </>
  );
};

export default Input