import React from "react";

const ItemListContainer = ({greeting}) =>{
    return(
        <div className="container">
            <div className="row justify-content-center">
            {greeting}
            <p>Aqui se renderizara la tienda</p>
            </div>
        </div>
    );
};

export default ItemListContainer;