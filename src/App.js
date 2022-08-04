import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer'
import { Cart } from './Components/Cart';
import ItemDetailContainer from './Components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />  
      <Cart/>       
          <Routes>
          <Route path='/' element={<ItemListContainer greeting= {"Todos nuestros productos"} />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting= {`Cargando productos`} />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          </Routes>
    </BrowserRouter>
    </>
  );
  }

export default App;




