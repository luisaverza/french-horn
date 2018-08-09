import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import * as actions from '../../src/redux/actions'
import * as constants from '../../src/redux/constants'

const mockStore = configureMockStore([thunk])
const URI = 'https://api.discogs.com/users/ausamerika/collection/folders/0/releases?per_page=50&page='

describe('Random actions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

  it('should create an action to randomCalling', () => {
    const expectedAction = {
      type: constants.RANDOM_CALLING,
    }

    expect(actions.randomCalling()).toEqual(expectedAction)
  });

  it('should create an action to randomReceive', () => {
    const expectedAction = {
      type: constants.RANDOM_RECEIVE,
    }

    expect(actions.randomReceive()).toEqual(expectedAction)
  });

  it('should create an action to randomSuccess receive data', () => {
    const data = {
      pagination: {},
      releases: [],
    }

    const expectedAction = {
      type: constants.RANDOM_SUCCESS, data
    }

    expect(actions.randomSuccess({ data })).toEqual(expectedAction)
  });

  it('should create an action to randomError receive error', () => {
    const error = 1

    const expectedAction = {
      type: constants.RANDOM_ERROR, error
    }

    expect(actions.randomError({ error })).toEqual(expectedAction)
  });

  it('should create an action to randomPage receive currentPage', () => {
    const currentPage = 33

    const expectedAction = {
      type: constants.RANDOM_PAGE, currentPage
    }

    expect(actions.randomPage({ currentPage })).toEqual(expectedAction)
  });

  it('should create an action to randomRelease receive release', () => {
    const release = {
      foo: 'bar'
    }

    const expectedAction = {
      type: constants.RANDOM_RELEASE, release
    }

    expect(actions.randomRelease({ release })).toEqual(expectedAction)
  });

  it('should create an action to totalPages receive data', () => {
    const data = {
      pagination: {},
      releases: [],
    }

    const expectedAction = {
      type: constants.RANDOM_TOTAL, data
    }

    expect(actions.totalPages({ data })).toEqual(expectedAction)
  });

  it('should fetch to getTotalPages and dispatch the actions', () => {
    const data = {
      pagination: {},
      releases: [],
    }

    fetchMock.getOnce(
      'https://api.discogs.com/users/ausamerika/collection/folders/0/releases?per_page=50&page=1',
      {
        body: data,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    const store = mockStore({ data: {}, error: 0 })
    
    const expectedActions = [
      { type: constants.RANDOM_CALLING },
      { type: constants.RANDOM_RECEIVE },
      { type: constants.RANDOM_ERROR, error: 0 },
      { type: constants.RANDOM_TOTAL, data },
    ]

    return store.dispatch(actions.getTotalPages({ URI, page: 1 }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })

  // it('should catch an error and dispatch the error action', () => {
  //   const error = 1
        
  //   fetchMock.config.fallbackToNetwork = false    
  //   fetchMock.mock(URI, 500)

  //   const store = mockStore({ error: 0 })

  //   const expectedActions = [
  //     { type: constants.RANDOM_ERROR, error: 1 }
  //   ]

  //   return store.dispatch(actions.getTotalPages({ URI, page: 1 }))
  //     .catch(() => {
  //       expect(store.getActions()).toEqual(expectedActions)
  //   })
  // })

  it('should fetch to get random page and dispatch the actions', () => {
    const data = {
      pagination: {},
      releases: ['foo'],
    }

    fetchMock.getOnce(
      'https://api.discogs.com/users/ausamerika/collection/folders/0/releases?per_page=50&page=1',
      {
        body: data,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    const store = mockStore({ data: {}, error: 0 })
    
    const expectedActions = [
      { type: constants.RANDOM_CALLING },
      { type: constants.RANDOM_RECEIVE },
      { type: constants.RANDOM_ERROR, error: 0 },
      { type: constants.RANDOM_RELEASE, release: data.releases[0] },
      { type: constants.RANDOM_SUCCESS, data },
    ]

    return store.dispatch(actions.randomFetch({ URI, currentPage: 1 }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
})
