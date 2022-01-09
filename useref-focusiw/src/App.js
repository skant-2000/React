import { useRef } from "react";
import "./styles.css";

export default function App() {

  const inputRef = useRef(null)

  const focusOnInput = () => {
    if (inputRef) {
      inputRef.current.focus()
    }
  }

  return (
    <div className="App">
      <h1>Focus</h1>
      <input ref={inputRef} />
      <div>
        <button onClick={focusOnInput}>Focus</button> 
      </div>
    </div>
  );
}
