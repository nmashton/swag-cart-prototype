import React from 'react'


const Cart = ({ items = [] }) => (
  <div>
    { items.map(CartItem) }
  </div>
)

const CartItem = ({ text }) => (
  <div>
    { text }
  </div>
)

export class SwagContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      itemsInCart: [{'text': 'testing'}]
    }
  }

  render () {
    return (
      <div>
        <Cart items={ this.state.itemsInCart }/>
      </div>
    )
  }
}
