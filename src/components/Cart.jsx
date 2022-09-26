import React from "react";
import CartTable from "./CartTable";
import { useCartContext } from "./CartContext";
import { Link } from "react-router-dom";

const Cart = () => {

    const { cart, totalPrice } = useCartContext();

    if (cart.length > 0) {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Imagen</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio unidad</th>
                            <th scope="col">Subtotal</th>
                            <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(item => <CartTable id={item.id} key={item.id} nombre={item.nombre} precio={item.precio} imagen={item.imagen} cantidad={item.cantidad} />)}
                    </tbody>
                </table>
                <div className="d-flex justfiy-content-center">
                    <p>Total: $ {totalPrice()}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="container d-flex justify-content-center flex-column text-center">
            <div className="mt-5 mb-5">
                <h2>No has agregado productos aun!</h2>
                <Link to={`/`} className="btn btn-primary">Ir a inicio</Link>
            </div>
        </div>
    )

};

export default Cart;