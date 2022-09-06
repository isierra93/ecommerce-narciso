import React from "react";
import imgCartWidget from "../assets/images/cartwidget.png"

const CartWidget = () =>{
    return(
        <div>
            <img src={imgCartWidget} alt="Cart widget" width={"45px"} height={"45px"} />
        </div>
    );
};

export default CartWidget;