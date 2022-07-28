import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Cart } from 'react-bootstrap-icons';

const Cartwidget = ()  => {
    return (
        <>
         <div> 
         <Cart color='white'/>
            <h6 className="numberCart">
              6
            </h6>
         </div> 
         </>
    )
  }

export default Cartwidget;