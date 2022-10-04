import React , { useEffect , useState } from "react";
import ItemDetail from "./ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    const { id } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, `items`, id);
        getDoc(queryDoc)
        .then(res => setItem({id: res.id, ...res.data()}))
    },[id])

    return (
        <div className="container mt-5 mb-5 itemDetailContainer">
            <ItemDetail item={item} />
        </div>
    )
};

export default ItemDetailContainer;