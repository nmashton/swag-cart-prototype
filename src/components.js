import React from 'react'
import { connect } from 'react-redux'

import { addItem, remove } from './actions'


/***
 * Item selector component
 */

const Purchaseable_ = ({ add, children, price, text, type }) => (
  <div>
    <h2>{ children }</h2>
    <p>
      <button onClick={add}>Add to cart</button>
    </p>
  </div>
)

export const Purchaseable = connect(
  (state) => ({}),
  (dispatch, ownProps) => ({
    add: (item) => {
      let { price, text, type } = ownProps
      dispatch(addItem({ price, text, type }))
    }
  })
)(Purchaseable_)


/***
 * Shopping cart components
 */

const Cart_ = ({ cartItems = [] }) => (
  <div>
    { cartItems.map((item) => <CartItem key={item.id} {...item}/>) }
  </div>
)

const CartItem_ = ({ id, quantity, remove, text }) => (
  <div key={ id }>
    <p>{ text }</p>
    <p>Quantity: { quantity }</p>
    <button onClick={remove}>Remove</button>
  </div>
)

const CartItem = connect(
  (store) => ({}),
  (dispatch, ownProps) => ({
    remove: () => dispatch(remove(ownProps.id))
  })
)(CartItem_)

export const Cart = connect(
  ({cartItems}) => ({cartItems}),
  (dispatch, ownProps) => ({})
)(Cart_)
