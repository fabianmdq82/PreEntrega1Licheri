import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Category from '../pages/Category'
import Item from '../pages/Item'
import NavBarComponent from '../Components/NavBarComponent/NavBarComponent'

const MainRouter = () => {
  return (
    <BrowserRouter>
    <NavBarComponent />
    <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/category/:id" element={<Category/>}/>
        <Route path="/item/:id" element={<Item/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default MainRouter