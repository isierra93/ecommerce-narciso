import React from "react";
import Item from "../Item/Item";

const ItemList = ({items}) =>{

    return(
        <div className="row">
            {items.map(item => <Item id={item.id} key={item.id} nombre={item.nombre} precio={item.precio} imagen={item.imagen}/> )}
        </div>
    )
};

export default ItemList;