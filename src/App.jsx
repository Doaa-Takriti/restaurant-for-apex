
import './App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Menu from './pages/Menu'
import Drink from './pages/Drink'
import  Salad from "./pages/Salad"


function App() {

  return (
    <>
 <Routes>

 <Route path='/' element={<Home />} />
 <Route path='/menu' element={<Menu />} />
 <Route path='/drinks' element={<Drink />} />
 <Route path='/salad' element={<Salad />} />



 </Routes>

    </>
  )
}

export default App
