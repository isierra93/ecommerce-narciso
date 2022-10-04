import React from "react";
import CartWidget from "../components/CartWidget";
import logo from "../assets/images/logo.png"
import Promocion from "../components/Promocion";
import { Link } from "react-router-dom";
import { useCartContext } from "./CartContext";

const NavBar = () => {
    const {cart} = useCartContext();

    return (
        <nav>
            <Promocion bannerPromo="15% DE DESCUENTO EN PLANTAS PAGANDO EN EFECTIVO. 3 Y 6 CUOTAS SIN INTERES CON TARJETA. ENVIO GRATIS EN COMPRAS SUPERIORES A $7900, DENTRO DE CABA." />
            <ul className="nav justify-content-center p-3 navbar-light bg-light text-white">
                <img src={logo} alt="Logo" width={"45px"} height={"45px"} className="rounded" />
                <li className="nav-item">
                    <Link to={`/`} className="nav-link" aria-current="page" href="/#">Inicio</Link>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Productos
                    </a>
                    <ul className="dropdown-menu">
                        <li><Link to={`/categoria/plantas`} className="dropdown-item">Plantas</Link></li>
                        <li><Link to={`/categoria/semillas`} className="dropdown-item">Semillas</Link></li>
                        <li><Link to={`/categoria/herramientas`} className="dropdown-item">Herramientas</Link></li>
                        <li><Link to={`/categoria/fertilizantes`} className="dropdown-item">Fertilizantes</Link></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#">Envios</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#">Contacto</a>
                </li>
                {
                    cart.length>0 ?
                    <CartWidget />
                    : null
                }
                
            </ul>
        </nav>
    );
};

export default NavBar;