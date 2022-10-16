import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useState } from "react";
import ContactSubmit from "./ContactSubmit";


const Contact = () => {

    const [nombre, setNombre] = useState(``);
    const [email, setEmail] = useState(``);
    const [consulta, setConsulta] = useState(``);
    const [submit, setSubmit] = useState(true);

    const obtenerNombre = (e) => setNombre(e.target.value);
    const obtenerEmail = (e) => setEmail(e.target.value);
    const obtenerConsulta = (e) => setConsulta(e.target.value);

    const guardarConsulta = (e) => {
        e.preventDefault();
        const consult = {
            nombre: nombre,
            email: email,
            consulta: consulta
        }
        const db = getFirestore();
        const orderCollection = collection(db, `consultas`);
        addDoc(orderCollection, consult);
        setSubmit(false);
    }

    return (
        <div className="viewContainer container">
            <section className="d-flex flex-column justify-content-center">
                {
                    submit ?
                        <div>
                            <h2 className="text-center mb-5 mt-3">Envienos su consulta o contactenos por Whatsapp</h2>
                            <form action="" className="d-flex flex-column form-group" onSubmit={guardarConsulta}>
                                <input
                                    className="mb-3 mt-3"
                                    type="text"
                                    placeholder="Nombre"
                                    value={nombre}
                                    onChange={obtenerNombre}
                                    required
                                />
                                <input
                                    className="mb-3 mt-3"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={obtenerEmail}
                                    required
                                />
                                <textarea
                                    name=""
                                    cols="30"
                                    rows="10"
                                    placeholder="Ingrese su consulta"
                                    value={consulta}
                                    onChange={obtenerConsulta}
                                >
                                </textarea>
                                <div className="d-flex justify-content-center mt-5">
                                    <button className="btn btn-lg btn-success">Confirmar</button>
                                </div>
                            </form>
                        </div>
                        : <ContactSubmit />
                }
            </section>
        </div>
    );
};

export default Contact;