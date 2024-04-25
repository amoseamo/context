import './App.css';
import Login from './Login.js';
import Home from './Home.js'
import About from './About.js';
import Dashboard from './Dashboard.js';
import Product from './Product.js';
import Navbar from './Navbar.js';
import { ProductContext } from './ProductContext.js';
import {Route,Routes} from 'react-router-dom';
import { useState } from 'react';


function App() {

   const[quantity,setQuantity]=useState(1)

  return (
      <div>
      <ProductContext.Provider value={{quantity,setQuantity}}>

      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/product' element={<Product/>}/>
      
      </Routes>
          
      </ProductContext.Provider>
    
      </div>
  );
}


export default App;