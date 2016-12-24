import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import { Cart, Purchaseable } from './components'
import { cartItems } from './reducers'

const store = createStore(combineReducers({ cartItems }))

window.store = store

render(
  (
    <Provider store={ store }>
      <Cart/>
    </Provider>
  ),
  document.getElementById('cart')
)

render(
  (
    <Provider store={ store }>
      <Purchaseable price={20.99} text="T-Shirt" type="t_shirt">
        T-Shirt
      </Purchaseable>
    </Provider>
  ),
  document.getElementById('buy_me')
)
