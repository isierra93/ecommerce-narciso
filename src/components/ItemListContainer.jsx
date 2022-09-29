import React , { useEffect , useState } from "react";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";

import ItemList from "../components/ItemList";

const ItemListContainer = ({greeting}) =>{

    const [items, setItems] = useState([]);

    const {categoria} = useParams();

    useEffect(() => {
        
        const querydb = getFirestore();
        const queryCollection = collection(querydb, `items`);

        if(categoria){
            const queryFilter = query(queryCollection, 
            where(`categoria`, `==`, categoria));
            getDocs(queryFilter)
            .then(res => setItems(res.docs.map(producto => ({id:producto.id, ...producto.data()}))));
        }else{
            getDocs(queryCollection)
            .then(res => setItems(res.docs.map(producto => ({id:producto.id, ...producto.data()}))));
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