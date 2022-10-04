import React , { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import {useCartContext} from "./CartContext"

const ItemDetail = ({item}) =>{

    const [goCart, setGocart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (unidades) =>{
        setGocart(true);
        addProduct(item, unidades);
    }

    return(
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4 d-flex justify-content-center">
                        <img src={item.imagen} className="img-fluid" alt={item.nombre} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-center">
                            <h3 className="card-title py-3"><strong>{item.nombre}</strong></h3>
                            <p className="card-text pb-2">{item.descripcion}</p>
                            <p className="card-text"><b>$ {item.precio}</b></p>
                        </div>
                        <div className="d-flex justify-content-center">
                        {
                            goCart
                            ? <Link to={`/cart`} className="btn btn-primary mb-2">Terminar compra</Link>
                            :<ItemCount initial={1} onAdd={onAdd} stock={item.stock}/>
                        }
                        </div>
                    </div>
                </div>
            </div>
    )
};

export default ItemDetail;