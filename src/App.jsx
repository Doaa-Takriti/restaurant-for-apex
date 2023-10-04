
import './App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Menu from './pages/Menu'
import Drink from './pages/Drink'
import  Salad from "./pages/Salad"
import Price from './pages/Price'
import FormMobile from './pages/FormMobile'
import Signup from './pages/auth/Signup'


function App() {

  return (
    <>
 <Routes>

 <Route path='/' element={<Home />} />
 <Route path='/menu' element={<Menu />} />
 <Route path='/drinks' element={<Drink />} />
 <Route path='/salad' element={<Salad />} />
 <Route path='/price' element={<Price />} />

 <Route path='/Formmobile' element={<FormMobile />} />
 <Route path='/signup' element={<Signup />} />


 </Routes>

    </>
  )
}

export default App
