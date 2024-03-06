import React from "react";
import CartTable from "./CartTable";
import { useCartContext } from "./CartContext";
import { Link } from "react-router-dom";

const Cart = () => {

    const { cart, totalPrice } = useCartContext();

    if (cart.length > 0) {
        return (
            <div className="container mt-5 mb-5 viewContainer noProducts">
                <div className="row">
                    <h2 className="mt-5">Listado de productos:</h2>
                    <table className="table mt-5">
                        <thead>
                            <tr>
                                <th scope="col"></th>
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
                </div>
                <div className="row">
                    <div className="d-flex justify-content-start">
                        <h3><strong>Total: $ {totalPrice()}</strong></h3>
                    </div>
                    <div className="d-flex justify-content-center" >
                    <Link to={`/form`} className="btn btn-success">Generar orden!</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container d-flex justify-content-center flex-column text-center viewContainer noProducts">
            <div className="mt-5 mb-5">
                <h2 className="mb-5">No has agregado productos aun!</h2>
                <Link to={`/`} className="btn btn-primary">Ir a inicio</Link>
            </div>
        </div>
    )

};

export default Cart;