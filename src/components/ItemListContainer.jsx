import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemCount from "../components/ItemCount/ItemCount";
import ItemList from "./ItemList/ItemList";

const ItemListContainer = ({greeting}) =>{

    const [items, setItems] = useState([]);
    useEffect(() => {

        const productos = [
            {"id":1, "nombre":"Cactus","descripcion":"Descripcion de Cactus", "imagen":"https://img.huffingtonpost.com/asset/5e7cd77a230000f2360c6d0b.jpeg?ops=scalefit_720_noupscale&format=webp"},
            {"id":2, "nombre":"Narcisos","descripcion":"Descripcion de Narcisos", "imagen":"https://img.huffingtonpost.com/asset/5e7cd77a230000f2360c6d0b.jpeg?ops=scalefit_720_noupscale&format=webp"},
            {"id":3, "nombre":"Rosas","descripcion":"Descripcion de Rosas", "imagen":"https://img.huffingtonpost.com/asset/5e7cd77a230000f2360c6d0b.jpeg?ops=scalefit_720_noupscale&format=webp"},
            {"id":4, "nombre":"Crisantemos","descripcion":"Descripcion de Crisantemos", "imagen":"https://img.huffingtonpost.com/asset/5e7cd77a230000f2360c6d0b.jpeg?ops=scalefit_720_noupscale&format=webp"},
            {"id":5, "nombre":"Jazmin","descripcion":"Descripcion de Jazmin", "imagen":"https://img.huffingtonpost.com/asset/5e7cd77a230000f2360c6d0b.jpeg?ops=scalefit_720_noupscale&format=webp"},
            {"id":6, "nombre":"Marimonias","descripcion":"Descripcion de Marimonias", "imagen":"https://img.huffingtonpost.com/asset/5e7cd77a230000f2360c6d0b.jpeg?ops=scalefit_720_noupscale&format=webp"},
            {"id":7, "nombre":"Fresias","descripcion":"Descripcion de Fresias", "imagen":"https://img.huffingtonpost.com/asset/5e7cd77a230000f2360c6d0b.jpeg?ops=scalefit_720_noupscale&format=webp"},
            {"id":8, "nombre":"Clavel","descripcion":"Descripcion de Clavel", "imagen":"https://img.huffingtonpost.com/asset/5e7cd77a230000f2360c6d0b.jpeg?ops=scalefit_720_noupscale&format=webp"},
    ];

        const promesa = new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve(productos);
            }, 2000);
        });
        promesa.then( (respuesta) => {
            setItems(respuesta);
        });
    }, []);


    return(
        <div className="container">
            <div className="row justify-content-center">
            {greeting}
            <p>Aqui se renderizara la tienda</p>
            <ItemList items={items} />
            <ItemCount stock={10} initial={1} onAdd={0} />
            </div>
        </div>
    );
};

export default ItemListContainer;