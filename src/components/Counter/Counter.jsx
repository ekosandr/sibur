import React from 'react';
import styles from './Counter.module.css';

const Counter = ({ value }) => {
  return <p className={styles.counter}>{value}</p>;
};

export default Counter;
