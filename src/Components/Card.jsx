import React from 'react'
import cardStyles from './Card.module.css'

const Card = ({item}) => {
  console.log(cardStyles)
  return (
    <div className={cardStyles.card}>
        <img className={cardStyles.cardImg} src={item.img} alt="" />
        <h4>{item.tipo}</h4>
        <h5>{item.precio}</h5>
    </div>
  )
}

export default Card