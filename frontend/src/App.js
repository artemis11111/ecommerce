import React from 'react'
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './Footer';
import Signup from './Signup';
import Login from './Login';
import Addproduct from './Addproduct';
import PrivateComponent from './PrivateComponent';
import Productlist from './Productlist';
import Updatedata from './Updatedata';

function App() {
  return (
    <>
      <div className='App'>
      <BrowserRouter>
        <Nav/>         
        <Routes>
          <Route element = {<PrivateComponent/>}>
            <Route path='/' element={<Productlist/>}/>
            <Route path='/addproduct' element={<Addproduct/>}/>
            <Route path='/updateproduct/:id' element={<Updatedata/>}/>
          </Route>          
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
      </div>
    </>
  )
}

export default App
