import * as C from './constants'

export const addItem = (item) => ({
  type: C.ADD_ITEM,
  item
})

export const incdec = (id, inc = true) => ({
  type: inc ? C.INCREMENT : C.DECREMENT,
  id
})

export const remove = (id) => ({
  type: C.REMOVE_ITEM,
  id
})
