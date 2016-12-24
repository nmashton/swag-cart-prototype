import React from 'react'
import { connect } from 'react-redux'

import { addItem } from './actions'


/***
 * Item selector component
 */

const Purchaseable_ = ({ add, children, price, text, type }) => (
  <div>
    <h2>{ children }</h2>
    <p>
      <button onClick={ () => {
        add({ type, text, price })
      } }>Add to cart</button>
    </p>
  </div>
)

export const Purchaseable = connect(
  (state) => ({}),
  (dispatch) => ({
    add: (item) => dispatch(addItem(item))
  })
)(Purchaseable_)


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
