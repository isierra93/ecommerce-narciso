import React from "react";
import logoInstagram from "../assets/images/instagram.png"
import logoFacebook from "../assets/images/facebook.png"
import logoTiktok from "../assets/images/tiktok.png"

const Footer = () =>{
    
    return(
        <footer className="container-fluid bg-dark text-white py-2">
            <div className="row text-center d-flex justify-content-center align-items-center">
            <div className="col-md-6">
                <p>Narciso tienda online. Todos los derechos reservados 2022 ®.</p>
            </div>
            <div className="col-md-6">
                <h5>Nuestras redes</h5>
                    <ul className="nav d-flex flex-column">
                        <li className="nav-item"><img src={logoInstagram} alt="logo Instagram" className="logoFooter "/><p>Instagram</p></li>
                        <li className="nav-item"><img src={logoFacebook} alt="logo Facebook" className="logoFooter "/><p>Facebook</p></li>
                        <li className="nav-item"><img src={logoTiktok} alt="logo TikTok" className="logoFooter "/><p>TikTok</p></li>
                    </ul>
            </div>
            </div>
        </footer>

    );
};

export default Footer;