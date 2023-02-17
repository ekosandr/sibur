import React from 'react';
import styles from './Btm.module.css';

const Btn = ({ onClick, children }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Btn;
