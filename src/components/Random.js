import React, { PureComponent } from 'react';
import MediaQuery from 'react-responsive';
import styles from './styles';
import Header from './Header'
import Previous from './Previous'
import Current from './Current'
import Loading from './Loading'
import Footer from './Footer'
import { ButtonRight, ButtonBottom } from './Button'

class Random extends PureComponent {
  render() {
    const {
      album,
      allArtists,
      previousAlbum,
      allPrevious,
      roulette,
      calling,
    } = this.props

    const randomAlbum = (calling)
      ? <Loading/>
      : <Current
          album={album}
          allArtists={allArtists}
          roulette={roulette}
        />

    return (
      <div style={styles.container}>
        <div style={styles.wrapper}>
          <Header/>
          <div style={styles.mainContainer}>
            <MediaQuery query="(min-device-width: 650px)">
              <Previous
                previousAlbum={previousAlbum}
                allPrevious={allPrevious}
              />
            </MediaQuery>
            {randomAlbum}
            <MediaQuery query="(min-device-width: 650px)">
              <ButtonRight roulette={roulette}/>
            </MediaQuery>
          </div>
          <MediaQuery query="(max-device-width: 650px)">
            <ButtonBottom roulette={roulette}/>
          </MediaQuery>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default Random
