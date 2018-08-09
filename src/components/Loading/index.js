import React from 'react';
import styles from './styles';
import loading from '../../assets/images/loading.gif';

const Loading = () => {
  return (
    <div style={styles.loadingContainer}>
      <img src={loading} alt='Loading new random album'/>
    </div>
  )
};

export default Loading;
