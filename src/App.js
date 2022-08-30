import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer'
import DetailContainer from './Components/DetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from './Context/CartContext';
import { NotificationProvider } from './Notification';
import CartContainer from './Components/CartContainer';
import Checkout from '../src/Components/Checkout'


  function App() {
  return (
    <>
    <NotificationProvider>
    <CartContextProvider>
    <BrowserRouter>
      <Navbar />
          <Routes>
          <Route path='/' element={<ItemListContainer greeting= {"Todos nuestros productos"} />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting= {`Cargando productos`} />} />
          <Route path='/detail/:productId' element={<DetailContainer/>} />
          <Route path='/cart' element={<h4><CartContainer/></h4>} />
          <Route path='/checkout' element={<Checkout/>} />
          </Routes>
    </BrowserRouter>
    </CartContextProvider>
    </NotificationProvider>
    </>
  );
  }

export default App;