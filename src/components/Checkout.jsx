import React from "react";

const Checkout = ({id}) =>{

    return(
        <div className="container mt-5 mb-5">
            <div className="row text-center">
                <h2>Compra generada!</h2>
                <p>Gracias por su compra!</p>
                <p>Su ID de compra es:</p>
                <h3>{id}</h3>
            </div>
            <div className="row">
                <img className="rounded" height={"500rem"} src="https://thumbs.gfycat.com/MatureWellinformedConure-size_restricted.gif" alt="Plants are friends" />
            </div>
        </div>
    )
};

export default Checkout;