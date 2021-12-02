import { useState } from "react";
import styles from "./Button.module.css"

function Counter() {
  const [count, setCount] = useState(0);

  const handleCount = (value) => {
    setCount(count + value);
  };

  const handleDouble = () => {
    setCount(count * 2);
  };

  return (
    <>
      <h1>{count}</h1>
      <button className={styles.button} onClick={() => handleCount(-1)}>-</button>
      <button className={styles.button} onClick={() => handleCount(1)}>+</button>
      <button className={styles.button} onClick={() => handleDouble()}>Double</button>
    </>
  );
}
export default Counter;
