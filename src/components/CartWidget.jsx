import React from "react";
import imgCartWidget from "../assets/images/cartwidget.png"

const CartWidget = () =>{
    return(
        <div>
            <img src={imgCartWidget} alt="Cart widget" width={"45px"} height={"45px"} />
            <span>0</span>
        </div>
    );
};

export default CartWidget;