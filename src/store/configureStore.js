import { createStore, combineReducers } from 'redux'
import testReducer from '../reducers/test'

export default () => {
  const store = createStore(
    combineReducers({
      test: testReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  return store
}
