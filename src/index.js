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
      <Purchaseable
          img="https://d3n8a8pro7vhmx.cloudfront.net/dsausa/pages/1059/attachments/original/1482446513/ContinuingPoliticalRevolutionShirt.jpg?1482446513"
          price={20.99}
          text="T-Shirt"
          type="t_shirt">
        This is a fantastic DSA t-shirt.
      </Purchaseable>
    </Provider>
  ),
  document.getElementById('buy_me')
)

render(
  (
    <Provider store={ store }>
      <Purchaseable
          img="https://d3n8a8pro7vhmx.cloudfront.net/dsausa/pages/1059/attachments/original/1482446507/TshirtStudentDebt.jpg?1482446507"
          price={10.99}
          text="Another T-Shirt"
          type="another_t_shirt">
        This is another excellent DSA t-shirt.
      </Purchaseable>
    </Provider>
  ),
  document.getElementById('buy_me_also')
)
