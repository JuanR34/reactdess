import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../Context/CartContext";
import { addDoc, collection, Timestamp, getDocs, query, documentId, where, writeBatch} from 'firebase/firestore';
import { db } from '../Firebase/Index/Index'
import './Checkout.css'
import { FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';


const Checkout = () => {
    const [ order, setOrder ] = useState (0)
    const { cart, clearCart, getTotal } = useContext (CartContext)
    const [ orderNumber, setOrderNumber] = useState ("");
    const [name, setName] = useState("");
    const [mail, setMail] = useState ("")
    const [ phone, setPhone ] = useState ("");

    if (order>0) {
        return (
            <div>
                <h3> {name} Gracias por tu compra!</h3>
                <h4> El número de orden es #{orderNumber} </h4>
            </div>
        )
    }

    const makeOrder = async (e) => {
        try {

            const detailOrder = {
                buyer: {
                    name:  `${name}`,
                    phone: {phone},
                    email:  `${mail}`,
                },
                items: cart, 
                total: `${getTotal}`,
                date: Timestamp.fromDate (new Date())
            }

            console.log (detailOrder);

            const information = cart.map (prod => prod.id)
            const prodInf = collection (db, 'products')
            const prodAddedFirebase = await getDocs (query (prodInf, where (documentId(), 'in', information )))
            const { docs } = prodAddedFirebase
            const noStock = []
            const batch = writeBatch (db)

            docs.forEach (doc => {
                const infoDoc = doc.data()
                const stockDb = infoDoc.stock

                const productAdded = cart.find ( prod => prod.id === doc.id )
                const prodQuantity = productAdded?.quantity

                console.log (productAdded);
                console.log (prodQuantity);

                if (stockDb >= prodQuantity) {
                    batch.update (doc.ref, {stock: stockDb - prodQuantity})
                } else {
                    noStock.push ({ id: doc.id, ...infoDoc })
                }
            })


            if (noStock.length === 0) {
                const orderRef = collection (db, 'orders')
                const orderCreated = await addDoc (orderRef, detailOrder)
                batch.commit ()
                const OrderN = orderCreated.id
                clearCart ()
                setOrderNumber (OrderN.id);
                setOrder (1)
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops... Algo salió mal :(',
                    text: 'Uno de los prodcutos que intenta comprar está fuera de stock',
                    })
              }
        } catch (error) {
            console.log (error);
        } finally {
            console.log ('...');
      }
    }


    return (
        <div className="backgroundCheckout">
            <h4 className="LogoCheckout"> <FaLeaf className="LogoCheckout"/> VeganShop </h4>
            <form>
            <div className="ContainerCheckout">
                <div>
                <label> Nombre  
                    <input type = "text" onChange = {(e) => {setName (e.target.value);}} className='inputCheckout'/>    
                </label>
                </div>
                <div>
                <label> Email  
                    <input type = "text" onChange = {(e) => {setMail (e.target.value);}} className='inputCheckout2'/>
                </label>
                </div>
                <div>
                <label> Telefono  
                    <input type = "number" onChange = {(e) => {setPhone (e.target.value); }} className='inputCheckout3'/>
                </label>
                </div>
                </div>
                <Link to='/' type="submit" onClick = {makeOrder} className='buttonCheckout'> Enviar </Link>
            </form>
        </div>
    )
}

export default Checkout