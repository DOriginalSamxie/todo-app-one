import { createStore } from 'redux'

import todoReducer from './reducers' // Ensure this import path is correct

const store = createStore(todoReducer)

export default store
