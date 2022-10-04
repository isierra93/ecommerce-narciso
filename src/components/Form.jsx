import React, { useState } from "react";
import { useCartContext } from "./CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Checkout from "./Checkout";

const Form = () => {

    const { cart, totalPrice, clearCart } = useCartContext();

    const [nombre, setNombre] = useState(``);
    const [telefono, setTelefono] = useState(``);
    const [email, setEmail] = useState(``);
    const [orderId, setOrderId] = useState(``);


    const obtenerNombre = (e) => setNombre(e.target.value);
    const obtenerTelefono = (e) => setTelefono(e.target.value)
    const obtenerEmail = (e) => setEmail(e.target.value);

    const generarOrden = (e) => {
        e.preventDefault();
        const orden = {
            buyer: {
                nombre: nombre,
                telefono: telefono,
                email: email
            },
            items: cart.map(item => ({ id: item.id, nombre: item.nombre, precio: item.precio })),
            total: totalPrice()
        }
        const db = getFirestore();
        const orderCollection = collection(db, `ordenes`);
        addDoc(orderCollection, orden).then((res) => {
            setOrderId(res.id);
        });
        clearCart();
    }


    return (
        <div className="d-flex justify-content-center">
            {orderId === "" ?
                <form className="form-group d-flex flex-column mt-5 mb-5" action="" onSubmit={generarOrden}>
                    <h2 className="text-center mb-3">Formulario de compra</h2>
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
                : <Checkout id={orderId} />
            }</div>
    )
};

export default Form;