import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../Item/ItemList";
import { fetchApi } from "../fetchProducts";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) =>{

    const [items, setItems] = useState([]);

    const {categoria} = useParams();

    useEffect(() => {
        
        if(!categoria){
            fetchApi().then(response =>{
                setItems(response);
            });
        }else{
            fetchApi().then(response =>{
                setItems(response.filter(cat => cat.categoria === categoria) )
            })
        }
    },[categoria]);

    return(
        <div className="container">
            <div className="row justify-content-center">
            <h1 className="text-center">{greeting} {categoria}</h1>
            <ItemList items={items} />
            </div>
        </div>
    );
};

export default ItemListContainer;