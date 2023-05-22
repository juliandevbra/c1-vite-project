import React from 'react'
import { navbarStyles } from './NavbarStyles'

const Navbar = () => {
    let titulos = ['Home', 'Contacto', 'About', 'Pizzas']
    console.log('navbar')
    return (
    <div style={navbarStyles.navbar}>
        {titulos.map((titulo, index) => (
            <div key={index} style={{color: '#fff'}}>
                <h4 style={navbarStyles.titulo}>{titulo}</h4>
            </div>
        )
        )}
    </div>
  )
}

export default Navbar