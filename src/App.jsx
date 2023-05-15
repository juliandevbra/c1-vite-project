import './App.css'
import ClassComponent from './Components/ClassComponent'
import FuncComponent from './Components/FuncComponent'

function App() {

  return (
    <>
      <ClassComponent/>
      <FuncComponent text={'Función n° 1'} salario={150000} />
      <FuncComponent text={'Función n° 2'} salario={300000} />
    </>
  )
}

export default App
