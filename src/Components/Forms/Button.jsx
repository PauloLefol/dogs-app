import React from 'react';
import styled from 'styled-components';
import styles from './Button.module.css';

export const StyledButton = styled.button`
  & {
    font-size: 1rem;
    font-family: var(--type-first);
    cursor: pointer;
    border: none;
    border-radius: 0.4rem;
    background-color: var(--primary-yellow);
    color: var(--primary-brown);
    padding: 0.8rem 1.2rem;
    box-sizing: border-box;
    min-width: 8rem;
    transition: 0.2s;
  }
  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px var(--secondary-yellow),
      0 0 0 4px var(--primary-yellow);
  }
  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
