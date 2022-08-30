import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../Context/CartContext";
import { addDoc, collection, Timestamp, getDocs, query, documentId, where, writeBatch} from 'firebase/firestore';
import { db } from '../Firebase/Index/Index'


const Checkout = () => {
    const [ order, purchasedOrder ] = useState (0)
    const { cart, clearCart, total } = useContext (CartContext)
    const [ orderNumber, setOrderNumber, name, setName, mail, setMail ] = useState ("");
    const [ phone, setPhone ] = useState (0);

    if (order === 1) {
        return (
            <div>
                <h3> {name} Gracias por tu compra!</h3>
                <h4> El número de orden es #{orderNumber} </h4>
            </div>
        )
    }

    const makeOrder = async () => {
        try {
            const detailOrder = {
                buyer: {
                    name: name,
                    phone: phone,
                    email: mail,
                },
                items: cart,
                total: `${total}`,
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
                const prodQ = productAdded?.quantity

                console.log (productAdded);
                console.log (prodQ);

                if (stockDb >= prodQ) {
                    batch.update (doc.ref, {stock: stockDb - prodQ})
                } else {
                    noStock.push ({ id: doc.id, ...infoDoc })
                }
            })


            if (noStock.length === 0) {
                const orderRef = collection (db, 'orders')
                const orderCreated = await addDoc (orderRef, detailOrder)
                batch.commit ()
                console.log (orderCreated.id);
                clearCart ()
                setOrderNumber (orderCreated.id);
                purchasedOrder (1)
            } else {
                console.log ('No hay disponibilidad de este producto')
            }
        } catch (error) {
            console.log (error);
        } finally {
            console.log ('No se puede realizar esta funcion')
      }
    }


    return (
        <div>
            <h4> VeganShop </h4>
            <form>
                <label> Nombre:
                    <input type = "text" onChange = {(e) => {setName (e.target.value);}} />    
                </label>
                <label> Email:
                    <input type = "text" onChange = {(e) => {setMail (e.target.value);}} />
                </label>
                <label> Telefono:
                    <input type = "number" onChange = {(e) => {setPhone (e.target.value); }} />
                </label>
            </form>
            <button type = "submit" onClick = {makeOrder}> Enviar </button>
        </div>
    )
}

export default Checkout