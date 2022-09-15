import React from "react";

const Footer = () =>{
    
    return(
        <footer className="container-fluid bg-dark text-white py-2">
            <div className="row text-center d-flex justify-content-center align-items-center">
            <div className="col-md-6">
                <p>Derechos reservados 2022.</p>
            </div>
            <div className="col-md-6">
                <h5>Nuestras redes:</h5>
                    <ul className="nav d-flex flex-column">
                        <li className="nav-item"><a className="nav-link" href="/#" target="_blank">Instagram</a></li>
                        <li className="nav-item"><a className="nav-link" href="/#" target="_blank">Facebook</a></li>
                        <li className="nav-item"><a className="nav-link" href="/#" target="_blank">Tiktok</a></li>
                    </ul>
            </div>
            </div>
        </footer>

    );
};

export default Footer;