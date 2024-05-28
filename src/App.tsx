import { useState } from 'react'
import Login from './Component/Login';
import Signup from './Component/Sign_up';
import Cart from './Component/Cart';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"; 


function App() {
 

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Signup></Signup>}></Route>
          <Route path='/Login' element={<Login></Login>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
