import React from 'react'

const Navbar = () => {
    let titulos = ['Home', 'Contacto', 'About', 'Pizzas']
  return (
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
        {titulos.map((titulo, index) => (
            <div key={index}>
                <h4>{titulo}</h4>
            </div>
        )
        )}
    </div>
  )
}

export default Navbar