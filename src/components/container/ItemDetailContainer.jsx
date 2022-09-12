import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "../Item/ItemDetail";

const ItemDetailContainer = () =>{

    const [item, setItem] = useState([]);
    useEffect( () =>{
        const productos = [
            {"id":1, "nombre":"Cactus","descripcion":"Descripcion de Cactus", "precio" : 1500, "imagen":"https://img.huffingtonpost.com/asset/5e7cd77a230000f2360c6d0b.jpeg?ops=scalefit_720_noupscale&format=webp"},
            {"id":2, "nombre":"Narcisos","descripcion":"Descripcion de Narcisos", "precio" : 1500, "imagen":"https://img.huffingtonpost.com/asset/5e7cd77a230000f2360c6d0b.jpeg?ops=scalefit_720_noupscale&format=webp"},
            {"id":3, "nombre":"Rosas","descripcion":"Descripcion de Rosas", "precio" : 1500, "imagen":"https://img.huffingtonpost.com/asset/5e7cd77a230000f2360c6d0b.jpeg?ops=scalefit_720_noupscale&format=webp"},
            {"id":4, "nombre":"Crisantemos","descripcion":"Descripcion de Crisantemos", "precio" : 1500, "imagen":"https://img.huffingtonpost.com/asset/5e7cd77a230000f2360c6d0b.jpeg?ops=scalefit_720_noupscale&format=webp"},
            {"id":5, "nombre":"Jazmin","descripcion":"Descripcion de Jazmin", "precio" : 1500, "imagen":"https://img.huffingtonpost.com/asset/5e7cd77a230000f2360c6d0b.jpeg?ops=scalefit_720_noupscale&format=webp"},
            {"id":6, "nombre":"Marimonias","descripcion":"Descripcion de Marimonias", "precio" : 1500, "imagen":"https://img.huffingtonpost.com/asset/5e7cd77a230000f2360c6d0b.jpeg?ops=scalefit_720_noupscale&format=webp"},
            {"id":7, "nombre":"Fresias","descripcion":"Descripcion de Fresias", "precio" : 1500, "imagen":"https://img.huffingtonpost.com/asset/5e7cd77a230000f2360c6d0b.jpeg?ops=scalefit_720_noupscale&format=webp"},
            {"id":8, "nombre":"Clavel","descripcion":"Descripcion de Clavel", "precio" : 1500, "imagen":"https://img.huffingtonpost.com/asset/5e7cd77a230000f2360c6d0b.jpeg?ops=scalefit_720_noupscale&format=webp"},
    ];

    const promesa = new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(productos);
        }, 2000);
    });
    promesa.then( (respuesta) => {
        let itemElegido = respuesta.find( (item) => item.id === 3 );
        setItem(itemElegido);
    });

    },[])

    return(
        <div className="container">
            <ItemDetail item={item} />
        </div>
    )
};

export default ItemDetailContainer;