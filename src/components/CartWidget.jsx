import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "./CartContext";


const CartWidget = () =>{
    const {cart} = useCartContext();

    return(
        <Link to={`/cart`} className="btn btn-outline-primary">
           <div className="d-flex pt-1">
                <span className="material-symbols-outlined px-1">garden_cart</span>
                <span>{cart.length}</span>
            </div>
        </Link>
    );
};

export default CartWidget;