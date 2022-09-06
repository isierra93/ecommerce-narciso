import React from "react";
import ItemCount from "../components/ItemCount/ItemCount";

const ItemListContainer = ({greeting}) =>{
    return(
        <div className="container">
            <div className="row justify-content-center">
            {greeting}
            <p>Aqui se renderizara la tienda</p>
            <ItemCount stock={10} initial={1} onAdd={0} />
            </div>
        </div>
    );
};

export default ItemListContainer;