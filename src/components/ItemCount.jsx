import React , { useState } from "react";

const ItemCount = ({ initial, onAdd, stock }) => {

    const [cantidad, setCantidad] = useState(initial);

    const decrementar = () => {
        setCantidad(cantidad - 1);
    };
    const incrementar = () => {
        setCantidad(cantidad + 1);
    };
    return (
        <div className="col-md-4 d-flex flex-column">
            <div className="btn-group d-flex" role="group">
                <button disabled={cantidad <= 1} type="button" className="btn btn-outline-primary" onClick={() => {
                    decrementar();
                }}>-</button>
                <input readOnly type="number" className="form-control text-center" value={cantidad} />
                <button disabled={stock === cantidad} type="button" className="btn btn-outline-primary" onClick={() => {
                    incrementar();
                }}>+</button>
            </div>
            <div className="d-grid gap-2 pt-2 mb-2">
                <input disabled={cantidad < 0} className="btn btn-primary" type="button" value="Agregar" onClick={() => {
                    onAdd(parseInt(cantidad));
                }} />
            </div>
        </div>
    )
};

export default ItemCount;