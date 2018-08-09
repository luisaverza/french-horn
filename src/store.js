import thunk from 'redux-thunk'

import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'

import random from './redux/reducer'

const store = createStore(
  combineReducers({
    random,
  }),
  applyMiddleware(thunk),
)

export default store
