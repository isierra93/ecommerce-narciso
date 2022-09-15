import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";
import { getProduct } from "./fetchProducts";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    const { id } = useParams();

    useEffect(() => {
        getProduct(parseInt(id)).then(response => {
            setItem(response)
        })
    },[id])

    return (
        <div className="container">
            <ItemDetail item={item} />
        </div>
    )
};

export default ItemDetailContainer;