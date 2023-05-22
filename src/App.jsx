import './App.css'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar'
import ClassComponent from './Components/ClassComponent'
import { useState } from 'react'
import Cart from './Pages/Home/Cart'


function App() {

  const [cart, setCart] = useState([])
  
  return (
    <>
      <Navbar/>
      <Home setCart={setCart} cart={cart}/>
      <Cart cart={cart}/>
    </>
  )
}

export default App
