import React, { useEffect, useState } from 'react';
import Navbar from "./componentes/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Itemlistcontainer from "./componentes/Itemlistcontainer/Itemlistcontainer";
import products from './services/mockService';
import Card1 from './componentes/Otros/Card/Card1';
import { ItemDetailContainer } from './componentes/Otros/Itemdetailcontainer/Itemdetailcontainer';
import { Tipoproducto } from "../src/componentes/tipoproducto/Tipoproducto";
import app, {obtenerProduct} from "./services/firebase";
import Carrito from './componentes/Carrito/Carrito';

function App() {
  console.log(obtenerProduct());
  const [preorder, setPreOrder] = useState({});
  const [cart, setCart] = useState([{
    marca: "",
    cantidad: 0,
    precio: ""
  }])

  useEffect(() => {
    let storagedPreOrder = sessionStorage.getItem("preorder");
    // if (storagedPreOrder) setPreOrder(JSON.parse(storagedPreOrder));
    console.log("os", storagedPreOrder)
  }, [preorder]);

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        {/* <Route path='/item' element={<Card1 />}/> */}
        <Route path='/' element={<Itemlistcontainer products={products} setPreorder={setPreOrder} preorder={preorder}/>} /> 
        <Route path='/product/:id' element={<ItemDetailContainer PropertyDetail={products}/>}/>
        <Route path='/Categoria/:tipo' element={<Tipoproducto PropertyDetail={products}/>}/>
        <Route path='/Carrito' element={<Carrito cart={cart} setCart={setCart} products={products} preorder={preorder}/>}/>
        <Route path='/confirmacioncompra' element={<p>Confirmaste tu confirmacioncompra</p>}/>
      
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
