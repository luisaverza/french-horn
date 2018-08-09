import React from 'react';
import styles from './styles';
import placeholder from '../../assets/images/placeholder.png';
import spotify from '../../assets/images/spotify.png';

const link = 'https://open.spotify.com/search/albums/'

const Current = ({ album, allArtists }) => {
  return (
    <div style={styles.currentContainer}>
      <div style={styles.placeholder}>
        <img src={placeholder} alt="No cover available"/>
        <p style={styles.placeholderTitle}>No cover available</p>
      </div>
      <p style={styles.currentAlbum}>{album}</p>
      <p style={styles.currentArtists}>{allArtists}</p>
      <div style={styles.listenContainer}>
        <a href={`${link}${album}`} style={styles.listenText}>
            Listen the album with Spotify
        </a>
        <img
          src={spotify}
          alt='Spotify logo'
          style={styles.listenImage}
        />
      </div>
    </div>
  )
};

export default Current;
