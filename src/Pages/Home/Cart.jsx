import React from 'react'

const Cart = ({cart}) => {
  return (
    <div>
        {cart.map(item => <li>{item.tipo}</li>)}
    </div>
  )
}

export default Cart