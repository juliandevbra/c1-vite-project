import './App.css'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import ClassComponent from './Components/ClassComponent'
import { useState } from 'react'
import Cart from './Pages/Cart'
import Form from './Pages/Form'


function App() {

  const [cart, setCart] = useState([])
  
  return (
    <>
      <Navbar/>
      <Cart cart={cart}/>
      <Home setCart={setCart} cart={cart}/>
      <Form/>
    </>
  )
}

export default App
