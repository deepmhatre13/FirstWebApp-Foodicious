
import {Route, Routes } from 'react-router-dom';
import NavBar from './component/NavBar';
import Home from './pages/Home/Home';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Cart from './pages/Cart/Cart';
import Footer from './component/Footer/Footer';
import { useState } from 'react';
import Login from './component/Login/Login';
function App() {
  const[showLogin,setShowLogin]=useState(false)
 return (
  <>
  {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
   <div className='app'>
<NavBar setShowLogin={setShowLogin}/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/order' element={<PlaceOrder/>}/>
</Routes>
  </div>
  <Footer/>
  </>
 
 );
}

export default App
