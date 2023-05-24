import React, { useState } from 'react'
import cardStyles from './Card.module.css'

const Card = ({item, cart, setCart}) => {

  // const {img, tipo, precio} = item
  const [counter, setCounter] = useState(0)

  const sumar = () => {
    setCounter(counter + 1)
  }
  const restar = () => {
    setCounter(counter - 1)
  }
  return (
    <div className={cardStyles.card}>
        <img className={cardStyles.cardImg} src={item.img} alt="" />
        <h4>{item.tipo}</h4>
        <h5>{item.precio}</h5>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <button disabled={counter===0} onClick={restar}>-</button>
          <h5 style={{margin: '10px'}}>{counter}</h5>
          <button onClick={sumar}>+</button>
        </div>
        <button onClick={() => setCart([...cart, item])}>Agregar al carrito 🛒</button>
    </div>
  )
}

export default Card