import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'core-js/actual';
import Navbar from './componentes/Navbar';
import Itemlistcontainer from './componentes/Itemlistcontainer';
import Itemdetailcontainer from "./componentes/Itemdetailcontainer";



function App() {
  /*
  let imagen = "stacker-quintuple (1).png"
  let titulo ="Stacker Quíntuple"
  let descripcion ="5 carnes a la parri, salsa stacker, pan, queso cheddar, panceta. Solo para expertos"
  <div className="row">
        <div className ="col-md-2">
          <img src = {imagen} alt = {titulo} className = "image-fluid" />
        </div>
        <div className = "col-md-2">
          <h1> {titulo} </h1>
          <p> {descripcion}</p>
        </div>
      </div>
  */

  return (
  
    <div className="container">
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Itemlistcontainer/>} />
          <Route path='/categoria/:categoriaId' element={<Itemlistcontainer/>} />
          <Route path='detalle/:detalleId' element={<Itemdetailcontainer/>} />
        </Routes>
    </BrowserRouter>
    

     
    </div>
  );
}

export default App;
