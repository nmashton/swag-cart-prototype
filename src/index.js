import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import { Cart } from './components'
import { cartItems } from './reducers'

const store = createStore(combineReducers({ cartItems }))

render(
  (
    <Provider store={ store }>
      <Cart/>
    </Provider>
  ),
  document.getElementById('app')
)
