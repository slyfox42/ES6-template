import { compose, createStore } from 'redux'
import rootReducer from '../reducers'

export default () => {
  const middlewares = []

  if (typeof window !== 'undefined' && window.devToolsExtension) {
    middlewares.push(window.devToolsExtension())
  }

  return createStore(rootReducer, undefined, compose(...middlewares))
}
