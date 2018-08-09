import React from 'react';
import styles from './styles';
import placeholder from '../../assets/images/placeholder.png';

const Previous = ({ previousAlbum, allPrevious }) => {
  if (previousAlbum && allPrevious) {
    return (
      <div style={styles.prevContainer}>
        <div style={styles.placeholderPrev}>
          <img
            src={placeholder}
            alt="No cover available"
            style={styles.prevImage}
          />
          <p style={styles.prevTitle}>No cover available</p>
        </div>
        <p style={styles.prevAlbum}>{previousAlbum}</p>
        <p style={styles.prevArtists}>{allPrevious}</p>
      </div>
    )
  } else {
    return (
      <div style={styles.prevContainer}>
        <p style={styles.noPrevAlbum}>No previous album to show yet</p>
        <img src={placeholder} alt="No previous album to show yet"/>
      </div>
    )         
  }
};

export default Previous;
