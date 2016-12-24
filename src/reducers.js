import { v4 } from 'uuid'

import * as C from './constants'

const DEFAULTS = {
  cartItems: []
}

export function cartItems (state = DEFAULTS.cartItems, action) {
  switch (action.type) {
    case C.ADD_ITEM:
      {
        let { type, text, price } = action.item
        return [
          ...state,
          {
            id: v4(),
            type, text, price
          }
        ]
      }
    default:
      return state
  }
}
