import React from 'react';

import styles from './Button.module.css';

const Button = ({ type, children, onClick }) => {
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
