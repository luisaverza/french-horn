import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Random from '../components/Random';
import * as actions from '../redux/actions';


const URI = 'https://api.discogs.com/users/ausamerika/collection/folders/0/releases?per_page=50&page='

class Container extends PureComponent {
  componentWillMount() {
    this.props.getTotalPages({ page: 1 })
  }

  componentDidMount() {
    const {
      totalPages,
      randomPage,
    } = this.props;

    randomPage({ totalPages });
  }

  roulette = () => {
    const {
      totalPages,
      randomPage,
      release,
    } = this.props;

    randomPage({ totalPages, release });
  }

  render() {

    const allArtists = this.props.artists.map(artist => artist.name).join(', ')
    const allPrevious = this.props.previousArtists.map(previous => previous.name).join(', ')

    return ( 
      <Random {...this.props}
        roulette={this.roulette}
        allArtists={allArtists}
        allPrevious={allPrevious}
      />
    )
  }
}

const mapStateToProps = ({
  random,
  random: {
    totalPages,
    data,
    release,
    previousRelease,
    calling,
  },
}) => ({
  random,
  totalPages,
  data,
  release,
  calling,
  album: release.basic_information.title,
  artists: release.basic_information.artists,
  previousAlbum: previousRelease.basic_information.title,
  previousArtists: previousRelease.basic_information.artists,
});

const mapDispatchToProps = dispatch => ({
  getTotalPages({ page }) {
    dispatch(actions.getTotalPages({ URI, page }));
  },
  randomPage({ totalPages, release }) {
    if (release) {
      dispatch(actions.savePrevious({ previousRelease: release }))
    }

    const currentPage = Math.floor(Math.random() * (totalPages - 1 + 1)) + 1;
    dispatch(actions.randomPage({ currentPage }));
    dispatch(actions.randomFetch({ URI, currentPage }));
  },
});

const RandomContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Container);

export default RandomContainer;
