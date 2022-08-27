import React from "react";
import CartWidget from "./CartWidget";
import logo from "./images/logo.png"
import Promocion from "./Promocion";

const Header = () => {

    return (

        <header>
            <nav>
                <Promocion bannerPromo="15% DE DESCUENTO EN PLANTAS PAGANDO EN EFECTIVO. 3 Y 6 CUOTAS SIN INTERES CON TARJETA. ENVIO GRATIS EN COMPRAS SUPERIORES A $7900, DENTRO DE CABA." />
                <ul className="nav justify-content-center p-3">
                    <img src={logo} alt="Logo" width={"45px"} height={"45px"} className="rounded" />
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Productos
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Plantas</a></li>
                            <li><a className="dropdown-item" href="#">Macetas</a></li>
                            <li><a className="dropdown-item" href="#">Semillas</a></li>
                            <li><a className="dropdown-item" href="#">Fertilizantes</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Envios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contacto</a>
                    </li>
                    <CartWidget/>
                </ul>
            </nav>
        </header>

    );
};

export default Header;