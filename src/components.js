import React from 'react'
import { connect } from 'react-redux'


/***
 * Shopping cart components
 */

const Cart_ = ({ cartItems = [] }) => (
  <div>
    { cartItems.map(CartItem) }
  </div>
)

const CartItem = ({ text }) => (
  <div key={ text }>
    { text }
  </div>
)

export const Cart = connect(
  ({cartItems}) => ({cartItems}),
  (dispatch) => ({})
)(Cart_)
