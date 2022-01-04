import "./styles.css";
import {useState, useRef} from "react"

export default function App() {

const [state, setState] = useState(0)

const timerRef = useRef(null);

const startTimer = () => {
  if (!timerRef.current) {
    timerRef.current = setInterval(() => {
      setState((prev) => prev + 1)
    }, 1000)
  }
}

const pauseTimer = () => {
  clearInterval(timerRef.current)
  timerRef.current = null
}

const resetTimer = () => {
  pauseTimer()
  setState(0)
}

  return (
    <div className="App">
      <h1>Timer</h1>
      <h3>{state}</h3>
      <button onClick = {startTimer}>START</button>
      <button onClick = {pauseTimer}>PAUSE</button>
      <button onClick = {resetTimer}>RESET</button>
    </div>
  );
}
