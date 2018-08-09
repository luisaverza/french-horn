import * as constants from './constants';

export const randomCalling = () =>
  ({ type: constants.RANDOM_CALLING });

export const randomReceive = () =>
  ({ type: constants.RANDOM_RECEIVE });

export const randomSuccess = ({ data }) =>
  ({ type: constants.RANDOM_SUCCESS, data });

export const randomError = ({ error }) =>
  ({ type: constants.RANDOM_ERROR, error});

export const randomPage = ({ currentPage }) =>
  ({ type: constants.RANDOM_PAGE, currentPage });

export const randomRelease = ({ release }) =>
  ({ type: constants.RANDOM_RELEASE, release });

export const totalPages = ({ data }) =>
  ({ type: constants.RANDOM_TOTAL, data });

export const savePrevious = ({ previousRelease }) =>
  ({ type: constants.RANDOM_PREVIOUS, previousRelease });

export const getTotalPages = ({ URI, page }) =>
  dispatch => {
    dispatch(randomCalling());

    return fetch(`${URI}${page}`, {
      options: {
        method: 'GET',
      },
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      dispatch(randomReceive());
      dispatch(randomError({ error: 0 }));
      return dispatch(totalPages({ data }));
    })
    .catch(error => {
      return dispatch(randomError({ error: 1 }));
    });
  };

export const randomFetch = ({ URI, currentPage }) =>
  dispatch => {
    dispatch(randomCalling());

    return fetch(`${URI}${currentPage}`, {
      options: {
        method: 'GET',
      },
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      dispatch(randomReceive());
      dispatch(randomError({ error: 0 }));

      if (data.releases.length) {
        const index= Math.floor(Math.random() * (data.releases.length - 1 + 1));
        dispatch(randomRelease({ release: data.releases[index] }));
      }

      return dispatch(randomSuccess({ data }));
    })
    .catch(error => {
      return dispatch(randomError({ error: 1 }));
    });
  }

