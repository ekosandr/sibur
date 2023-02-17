import React, { useEffect, useState } from 'react';
import Btn from './components/Btn/Btn';
import Counter from './components/Counter/Counter';
import styles from './css/App.module.css';

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        setCount(0);
      }
    });
  }, []);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div onKeyDown={(e) => console.log(e)} className={styles.container}>
      <div className={styles.mainBlock}>
        <Btn onClick={decrement}>-</Btn>

        <Counter value={count} onClick={decrement} />
        <Btn onClick={increment}>+</Btn>
      </div>
    </div>
  );
};

export default App;
