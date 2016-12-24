import React from 'react'
import { connect } from 'react-redux'

import { addItem } from './actions'

/***
 * Item purchase example component
 */

const Shirt_ = ({ add }) => (
  <div>
    Buy this t-shirt
    <button onClick={ () => {
      add({
        type: 't-shirt',
        text: 'T-Shirt',
        price: 20.99
      })
    } }>Buy me</button>
  </div>
)

export const Shirt = connect(
  (state) => ({}),
  (dispatch) => ({
    add: (item) => dispatch(addItem(item))
  })
)(Shirt_)

/***
 * Shopping cart components
 */

const Cart_ = ({ cartItems = [] }) => (
  <div>
    { cartItems.map(CartItem) }
  </div>
)

const CartItem = ({ text, id }) => (
  <div key={ id }>
    { text }
  </div>
)

export const Cart = connect(
  ({cartItems}) => ({cartItems}),
  (dispatch) => ({})
)(Cart_)
