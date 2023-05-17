import React from 'react'

const Card = ({item}) => {
  return (
    <div className='card'>
        <img className='card-img' src={item.img} alt="" />
        <h4>{item.tipo}</h4>
        <h5>{item.precio}</h5>
    </div>
  )
}

export default Card