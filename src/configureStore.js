
import { createStore, applyMiddleware, /*compose*/ } from 'redux'
import thunk from 'redux-thunk';
import reducer from './store/reducers'
import { composeWithDevTools } from 'redux-devtools-extension';


export default function configureStore(initialState = {}) {
  const middlewares = [thunk]

  return {
    store: createStore(
      reducer,
      initialState,
      composeWithDevTools(
        applyMiddleware(...middlewares)
      )
    )
  }
}