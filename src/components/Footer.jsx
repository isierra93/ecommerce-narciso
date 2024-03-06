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
                        <li key={logoInstagram} className="nav-item linksFooter"><img src={logoInstagram} alt="logo Instagram" className="logoFooter "/><a href="https://www.instagram.com.ar" rel="noreferrer" target="_blank">Instagram</a></li>
                        <li key={logoFacebook} className="nav-item linksFooter"><img src={logoFacebook} alt="logo Facebook" className="logoFooter "/><a href="https://www.facebook.com.ar" rel="noreferrer" target="_blank">Facebook</a></li>
                        <li key={logoTiktok} className="nav-item linksFooter"><img src={logoTiktok} alt="logo TikTok" className="logoFooter "/><a href="https://www.tiktok.com.ar" rel="noreferrer" target="_blank">TikTok</a></li>
                    </ul>
            </div>
            </div>
        </footer>

    );
};

export default Footer;