import { v4 } from 'uuid'

import * as C from './constants'

const DEFAULTS = {
  cartItems: []
}

export function cartItems (state = DEFAULTS.cartItems, action) {
  console.log(action)
  switch (action.type) {
    case C.ADD_ITEM:
      {
        let matches = state.filter((item) => item.type === action.item.type)
        if (matches.length) {
          return [...state].map((item) => {
            if (item.type === action.item.type) {
              return Object.assign({}, item, {quantity: item.quantity + 1})
            } else {
              return item
            }
          })
        }
        return [
          ...state,
          Object.assign({}, action.item, {id: v4(), quantity:1})
        ]
      }
    case C.DECREMENT:
      {
        let results = state.map((item) => {
          if (item.id === action.id) {
            if (item.quantity === 1) {
              return {delete: true}
            } else {
              return Object.assign({}, item, {quantity: item.quantity - 1})
            }
          }
        })
        return results.filter((item) => !item.delete)
      }
    case C.INCREMENT:
      return state.map((item) => (
        item.id === action.id
        ? Object.assign({}, item, {quantity: item.quantity + 1})
        : item
      ))
    case C.REMOVE_ITEM:
      return state.filter((item) => item.id !== action.id)
    default:
      return state
  }
}
