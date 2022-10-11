import React from "react";
import logoWhatsapp from "../assets/images/whatsapp.png"
const BotonWhatsapp = () =>{
    return(
        <div className="logoWhatsapp">
            <a href="https://www.whatsapp.com/?lang=es" rel="noreferrer" target="_blank"><img src={logoWhatsapp} alt="" /></a>
        </div>
    );
};

export default BotonWhatsapp;