import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, imagen }) => {
    return (
        <div className="col-md-3 py-3" >
            <div key={id} className="card">
                <img src={imagen} className="card-img-top" alt={nombre} />
                <div className="card-body text-center">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text"><b>${precio}</b></p>
                    <Link to={`/item/${id}`} className="btn btn-primary">Ver detalles</Link>
                </div>
            </div>
        </div>
    );
};

export default Item;