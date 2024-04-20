import React, { useState } from "react";
import { useCartContext } from "./CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Wallet } from '@mercadopago/sdk-react'
import axios from "axios";

const Form = () => {

    const { cart, totalPrice, clearCart } = useCartContext();

    const [nombre, setNombre] = useState(``);
    const [telefono, setTelefono] = useState(``);
    const [email, setEmail] = useState(``);
    const [orderId, setOrderId] = useState(``);
    const [preferenceIDSTATUS, setPreferenceIDSTATUS] = useState(null)


    const obtenerNombre = (e) => setNombre(e.target.value);
    const obtenerTelefono = (e) => setTelefono(e.target.value)
    const obtenerEmail = (e) => setEmail(e.target.value);

    const generarOrden = async () => {
        try {
            const orden = {
                buyer: {
                    nombre: nombre,
                    telefono: telefono,
                    email: email,
                },
                items: cart.map(item => ({ id: item.id, nombre: item.nombre, precio: item.precio })),
                total: totalPrice()
            }
            const db = getFirestore();
            const orderCollection = collection(db, `ordenes`)
            const response = await addDoc(orderCollection, orden)
            setOrderId(response.id)
            clearCart()
        } catch (error) {
            console.error('Error:', error)
        }
    }

    const createPreference = async () => {
        try {
            const response = await axios.post('https://node-js-mercadopago.vercel.app/api/create-order', {
                titleProducts: 'Narciso Store',
                totalPrice: totalPrice(),
                url_redirect: 'https://ecommerce-narciso.vercel.app/payed'
            })

            const { id } = response.data
            return id

        } catch (error) {
            console.error('Error:', error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const id = await createPreference()
        if (id) {
            setPreferenceIDSTATUS(id)
            await generarOrden()
        }
    }


    return (
        <div className="d-flex justify-content-center viewContainer">
            {orderId === "" ?
                <form className="form-group d-flex flex-column mt-5 mb-5" action="" onSubmit={handleSubmit}>
                    <h1 className="text-center mb-5 mt-3">Formulario de compra</h1>
                    <input
                        className="mb-3 mt-3"
                        type="text"
                        name="nombre"
                        placeholder="Nombre completo"
                        value={nombre}
                        onChange={obtenerNombre}
                        required
                    />
                    <input
                        className="mb-3"
                        type="number"
                        name="telefono"
                        placeholder="Telefono"
                        value={telefono}
                        onChange={obtenerTelefono}
                        required
                    />
                    <input
                        className="mb-3"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={obtenerEmail}
                        required
                    />
                    <div className="d-flex justify-content-center mt-5">
                        <button className="btn btn-success">Confirmar</button>
                    </div>
                </form>
                :
                <div className="container mt-5 mb-3 d-flex flex-column align-items-center">
                    <div className="row text-center">
                        <h2>Orden generada!</h2>
                        <p>Su ID de compra es: <span className="text-success"><strong>{orderId}</strong></span></p>
                        <h3><strong>Metodos de pago:</strong></h3>
                    </div>
            {
                preferenceIDSTATUS &&
                <Wallet initialization={{ preferenceId: preferenceIDSTATUS, redirectMode: 'modal' }} />
            }
                    <div className="row mt-2 img-checkout">
                    <img className="rounded" src="https://plus.unsplash.com/premium_photo-1681492971778-dfe7e9d2f664?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Plants are friends" />
                    </div>
                </div>
            }
        </div>
    )
};

export default Form;