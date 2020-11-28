import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import {inputReducer} from './Input/inputReducer'

const store = createStore(
  inputReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store