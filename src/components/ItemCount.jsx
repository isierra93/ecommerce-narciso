import React from "react";
import { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [cantidad, setiCantidad] = useState(initial);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdd, setItemAdd] = useState(onAdd);

    const restarCantidad = (valor) =>{
        if(valor > 0){
            setiCantidad(valor);
        }
    };

    const sumarCantidad = (valor) =>{
        if(valor <= itemStock){
            setiCantidad(valor);
        }  
    };

    const agregarProductos = (valor) =>{
        if(valor <= itemStock){
            setItemAdd(itemAdd + valor);
            setItemStock(itemStock - valor);
            setiCantidad(1);
        }
    }

    return(
        <div className="col-md-4 d-flex flex-column">
            <div className="btn-group d-flex" role="group">
                <button type="button" className="btn btn-outline-primary" onClick={() =>{
                    restarCantidad(cantidad - 1);
                    }}>-</button>
                <input readOnly type="text" className="form-control text-center" value={cantidad} />
                <button type="button" className="btn btn-outline-primary" onClick={() =>{
                    sumarCantidad(cantidad + 1);
                }}>+</button>
            </div>
            <div className="d-grid gap-2 pt-2">
                <input className="btn btn-primary" type="button" value="Agregar" onClick={() =>{
                    agregarProductos(cantidad);
                }}/>
            </div>
            <div className="pt-2">
            <p>Cantidad seleccionada: {itemAdd}</p>
            <p>Stock: {itemStock}</p>
            </div>
        </div>
    )
};

export default ItemCount;