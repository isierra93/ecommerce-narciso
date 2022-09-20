import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {

    const [cantidad, setCantidad] = useState(initial);
    const [itemStock, setItemStock] = useState(stock);

    useEffect(
        () => {
            setItemStock(stock)
        }, [stock])

    const decrementar = () => {
        setCantidad(cantidad - 1);
    };
    const incrementar = () => {
        setCantidad(cantidad + 1);
    };
    return (
        <div className="col-md-4 d-flex flex-column">
            <div className="btn-group d-flex" role="group">
                <button disabled={cantidad < 1} type="button" className="btn btn-outline-primary" onClick={() => {
                    decrementar();
                }}>-</button>
                <input readOnly type="text" className="form-control text-center" value={cantidad} />
                <button disabled={cantidad >= itemStock} type="button" className="btn btn-outline-primary" onClick={() => {
                    incrementar();
                }}>+</button>
            </div>
            <div className="d-grid gap-2 pt-2">
                <input disabled={stock <= 0} className="btn btn-primary" type="button" value="Agregar" onClick={() => {
                    onAdd(parseInt(cantidad));
                }} />
            </div>
            <div className="pt-2">
                <p>Cantidad seleccionada:</p>
                <p>Stock: {itemStock}</p>
            </div>
        </div>
    )
};

export default ItemCount;