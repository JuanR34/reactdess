import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Cart } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import './Cartwidget.css'

const Cartwidget = () => {
  const { getQuantity } = useContext(CartContext)
  const quantity = getQuantity()
  const totalQuantity = getQuantity()

  if(totalQuantity === 0) {
    return (
        <>
        <div className='ContainerCartwidget'>
        <Cart className='NavbarCart'/>
        <a  className='QuantityCart'> {quantity}</a> 
        </div>
        </>
    )
}

    return (
        <>
         <div> 
         <Link to='/cart' className='CartCss'>
         <Cart />
         {quantity}
         </Link>
         </div> 
         </>
    )
  }

export default Cartwidget;