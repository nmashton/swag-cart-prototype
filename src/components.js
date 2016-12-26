import React from 'react'
import { connect } from 'react-redux'

import { addItem, incdec, remove } from './actions'


/***
 * Item selector component
 */

const Purchaseable_ = ({ add, children, img, price, text, type }) => (
  <div className="card">
    <div className="card-image">
      <img src={img}/>
      <span className="card-title">
        { text }
      </span>
    </div>
    <div className="card-content">
      <p>
        { children }
      </p>
    </div>
    <div className="card-action">
      <a onClick={add}>Add to cart</a>
    </div>
  </div>
)

export const Purchaseable = connect(
  (state) => ({}),
  (dispatch, ownProps) => ({
    add: () => {
      let { price, text, type } = ownProps
      dispatch(addItem({ price, text, type }))
    }
  })
)(Purchaseable_)


/***
 * Shopping cart components
 */

const Cart_ = ({ cartItems = [], totalPrice = 0 }) => (
  <table>
    <thead>
      <tr>
        <th>Item</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      { cartItems.map((item) => <CartItem key={item.id} {...item}/>) }
      <tr>
        <td>Total:</td>
        <td>{ totalPrice() }</td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
)

const CartItem_ = ({ id, incdec, price, quantity, remove, text }) => (
  <tr key={ id }>
    <td>{ text }</td>
    <td>{ price }</td>
    <td>{ quantity }</td>
    <td>
      <a className="btn-floating btn-small waves-effect waves-light grey"
         onClick={incdec(false)}>
        <i className="material-icons">remove</i>
      </a>
      <a className="btn-floating btn-small waves-effect waves-light grey"
         onClick={incdec(true)}>
        <i className="material-icons">add</i>
      </a>
      <a className="btn-floating btn-small waves-effect waves-light red"
         onClick={remove}>
        <i className="material-icons">delete</i>
      </a>
    </td>
  </tr>
)

const CartItem = connect(
  (store) => ({}),
  (dispatch, ownProps) => ({
    remove: () => dispatch(remove(ownProps.id)),
    incdec: (inc = true) => () => dispatch(incdec(ownProps.id, inc))
  })
)(CartItem_)

export const Cart = connect(
  ({cartItems}) => ({
    cartItems,
    totalPrice: () => cartItems.reduce((acc, item) => (acc + item.price * item.quantity), 0).toFixed(2)
  }),
  (dispatch, ownProps) => ({})
)(Cart_)
