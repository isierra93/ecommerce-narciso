import React from "react";
import imgCartWidget from "./images/cartwidget.png"

const CartWidget = () =>{
    return(
        <div>
            <img src={imgCartWidget} alt="Cart image" width={"45px"} height={"45px"} />
        </div>
    );
};

export default CartWidget;