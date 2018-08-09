import React from 'react';
import MediaQuery from 'react-responsive';
import styles from './styles';

const Footer = () => {

  const manu = <a style={styles.footerLink}
    href="https://twitter.com/emanuelespies">
      @emanuelespies
    </a>
  const luisa = <a style={styles.footerLink}
    href="https://twitter.com/luisavspies">
      @luisavspies
    </a>
  
  return (
    <div>
      <MediaQuery query="(min-device-width: 650px)">
        <div style={styles.bigFooterContainer}>
          <p style={styles.footerText}>
            designed by {manu} brought to life by {luisa}
          </p>
        </div>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 650px)">
        <div style={styles.smallFooterContainer}>
          <p style={styles.footerText}>
            designed by {manu} brought to life by {luisa}
          </p>
        </div>
      </MediaQuery>
    </div>
  )
};

export default Footer;
