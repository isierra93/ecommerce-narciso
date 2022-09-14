import React from "react";
import ItemCount from "../Item/ItemCount";

const ItemDetail = ({item}) =>{
    return(
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4 d-flex justify-content-center">
                        <img src={item.imagen} className="img-fluid rounded img-thumbnail" alt={item.nombre} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-center">
                            <h5 className="card-title py-3">{item.nombre}</h5>
                            <p className="card-text pb-2">{item.descripcion}</p>
                            <p className="card-text"><b>$ {item.precio}</b></p>
                        </div>
                        <div className="d-flex justify-content-center">
                        <ItemCount stock={item.stock} initial={1} onAdd={0} />
                        </div>
                    </div>
                </div>
            </div>
    )
};

export default ItemDetail;