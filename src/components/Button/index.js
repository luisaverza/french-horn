import React from 'react';
import styles from './styles';

export const ButtonRight = ({ roulette }) => {
  return (
    <div>
      <button style={styles.buttonRight} onClick={roulette}>
        Click here to see the next album
      </button>
    </div>
  )
};

export const ButtonBottom = ({ roulette }) => {
  return (
    <div>
      <button style={styles.buttonBottom} onClick={roulette}>
        Click here to see the next album
      </button>
    </div>
  )
};
