import React from 'react'
import Navbar from './components/Navbar'
import { useLocation } from 'react-router-dom'
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home'
import Footer from './components/Footer';
import AllRooms from './pages/AllRooms';
import RoomDetails from './pages/RoomDetails';
const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar/>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/rooms' element={<AllRooms/>}/>
          <Route path='/rooms/:id' element={<RoomDetails/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App