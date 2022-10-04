import React from "react";
import { useCartContext } from "./CartContext";

const CartTable = ({ id, nombre, precio, imagen, cantidad }) => {
    const { removeProduct } = useCartContext()

    return (
        <tr key={id}>
            <th scope="row" ><img src={imagen} alt={nombre} width={80} height={80} /></th>
            <td>{nombre}</td>
            <td>{cantidad}</td>
            <td>{precio}</td>
            <td>$ {precio * cantidad}</td>
            <td><button className="btn btn-danger" onClick={() => removeProduct(id)}>X</button></td>
        </tr>
    );
};

export default CartTable;