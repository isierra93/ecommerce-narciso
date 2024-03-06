import React from "react";

const Checkout = ({id}) =>{

    return(
        <div className="container mt-5 mb-3 d-flex flex-column align-items-center">
            <div className="row text-center">
                <h2>Compra generada!</h2>
                <p>Gracias por su compra!</p>
                <p>Su ID de compra es:</p>
                <h3 className="text-success"><strong>{id}</strong></h3>
            </div>
            <div className="row mt-5 img-checkout">
                <img className="rounded" src="https://plus.unsplash.com/premium_photo-1681492971778-dfe7e9d2f664?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Plants are friends" />
            </div>
        </div>
    )
};

export default Checkout;