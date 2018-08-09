import * as constants from './constants'

const initial = {
  calling: false,
  data: {}, 
  error: 0,
  currentPage: 1,
  release: {
    basic_information: {
      title: '',
      artists: [],
    }
  },
  totalPages: 0,
  previousRelease: {
    basic_information: {
      title: '',
      artists: [],
    }
  },
}

export default (
  state = initial,
  {
    type,
    calling,
    data,
    error,
    currentPage,
    release,
    totalPages,
    previousRelease,
  }
) => {

  switch (type) {
    case constants.RANDOM_CALLING:
      return { ...state, calling: true }

    case constants.RANDOM_RECEIVE:
      return { ...state, calling: false }

    case constants.RANDOM_SUCCESS:
      return { ...state, data }

    case constants.RANDOM_ERROR:
      return { ...state, error }

    case constants.RANDOM_PAGE:
      return { ...state, currentPage }

    case constants.RANDOM_RELEASE:
      return { ...state, release }

    case constants.RANDOM_TOTAL:
      return { ...state, totalPages: data.pagination.pages }

    case constants.RANDOM_PREVIOUS:
      return { ...state, previousRelease }

    default:
      return state
  }

}
