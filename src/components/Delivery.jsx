import React from "react";
import mapa from "../assets/images/mapaenvios.png"

const Delivery = () => {
    return (
        <section>
            <div>
                <h3>En este menú encontrarás toda la información que necesitas saber sobre los envíos a domiclio:</h3>
            </div>
            <div>
                <ul>
                    <li>Formas de Pago</li>
                    <li>Plazos de entrega</li>
                    <li>Zonas de entrega</li>
                    <li>Tarifas</li>
                    <li>Adicionales (por volumen, peso y distancia al vivero)</li>
                    <li>Envíos al interior del país</li>
                    <li>Condiciones de entrega</li>
                </ul>
            </div>

            <div>
                <h5>¿Cómo abono el envío de mi pedido?</h5>
                <p>Para CABA, el costo de envío se abona directamente por la Tienda Online según el barrio en el que debemos realizar la entrega, el volumen y el peso de tu pedido.
                    Para el resto del AMBA, debemos cotizar el costo de entrega según la distancia desde el vivero hasta tu domicilio.</p>

                <h5>¿Cuánto tiempo demoran en entregarme mi pedido?</h5>
                <p>Demoramos entre 1 y 3 días hábiles desde el primer contacto que realizamos por WhatsApp, recién a partir de ese momento comenzamos a procesar tu compra. Si llega a haber algún inconveniente con tu pedido, como por ejemplo un faltante de stock, los tiempos de entrega podrían demorarse unos días más. En todo momento estarás en contacto con un asesor que se encargará de coordinar la entrega del pedido.</p>

                <h5>¿Cómo son los envíos a domicilio?</h5>
                <p>Narciso Store no cuenta con un servicio propio de entregas, trabajamos con una agencia de fletes de confianza muy experimentada en el traslado de plantas, macetas y de artículos de jardinería. Esto nos asegura que los productos lleguen a tu hogar tal cual salieron del vivero.</p>

                <h5>¿Cuales son las zonas de entrega?</h5>
                <p>Las tarifas podes verlas en el calculador de costos del carrito.</p>
            </div>
            <div>
                <img src={mapa} alt="Mapa de envios" />
            </div>
            <div>
                <h5>¿Cuales son los costos de entrega?</h5>
                <p>Para CABA, el costo de envío se abona directamente por la Tienda Online según el barrio en el que debemos realizar la entrega, el volumen y peso del pedido.
                    Las tarifas para CABA podés verlas en el calculador de costos del carrito de compras de la Tienda Online.
                    Están divididas en ZONA 1 y ZONA 2. El costo de entrega para cada zona depende del volumen y peso del pedido, pudiendo ser de tamaño BOX o DELIVERY.

                    Para el resto del AMBA, debemos cotizar el costo de entrega directamente con la agencia de fletes, según la distancia desde el vivero hasta tu domiclio.
                    Podés consultarnos el costo de la tarifa final al Gran Buenos Aires por WhatsApp haciendo <strong>click acá</strong>.

                    La TARIFA FINAL puede variar, ya que la misma depende no solo de la distancia al Vivero, sino también del peso y del volumen de tu pedido.
                    Si correspondiera abonar un adicional por peso y/o por volumen, te lo informaremos por WhatsApp, pudiendo pagar directamente en efectivo al fletero o bien
                    por WhatsApp mediante un link de Mercado Pago o Transferencia Bancaria.</p>

                <h5>¿Puede haber adicionales en el costo de entrega?</h5>
                <p>En el calculador de costos del carrito de compras de la tienda online, figura la tarifa base según el barrio y el tamaño. Esta tarifa puede tener adicionales
                    según el volumen que ocupe tu pedido y el peso total de la compra.
                    Una vez hecha la compra, te contactaremos por Whatsapp desde el sector de envíos, para informarte del estado de tu pedido. De corresponder un adicional por
                    peso y/o volumen, te lo informaremos por ese medio. Si tenes dudas sobre el costo de entrega, escribinos por WhatsApp haciendo 
                    <a target="_blank" href="https://www.youtube.com/watch?v=vgd-95t-jR4" rel="noreferrer">click acá</a>.</p>


            <h5>¿Hacen envíos al interior?</h5>
            <p>No realizamos entregas al interior del país. Solo trabajamos en CABA y Gran Buenos Aires.
                La opción que podemos ofrecerte es que contrates un expreso privado o un comisionista que se encargue de retirar los productos, nosotros los embalaremos y
                prepararemos adecuadamente para el viaje.</p>

            <h5>Condiciones de entrega</h5>
            <p>No tenemos envíos sin cargo, trabajamos con una agencia de fletes de confianza (podés ver las tarifas en el carrito de compras de nuestra Tienda Online).
                Los costos del envío a domicilio quedan siempre a cargo del cliente, siendo este quien los deba abonar en todos los casos.
                Las ventas están sujetas a un tiempo de proceso de hasta 3 días hábiles en el horario laboral de Lunes a Sábados de 10 a 18 hs.
                La Tienda Online no trabaja los Domingos.</p>

            <p><small className="text-muted">Es importante que nos proporciones una dirección válida en el caso de que hayas solicitado un envío a domicilio.
                Si los datos brindados por el cliente son incorrectos y por ese motivo el transporte no puede localizar ni entregar el pedido en destino, corresponde al cliente cubrir los costos
                adicionales de la entrega. En el caso de que el cliente no se encuentre en el domiclio, en el rango horario indicado y la agencia de fletes no pueda concretar la entrega,
                el cliente deberá volver a abonar el costo de envío.</small></p>
        </div>
        </section >
    );
};

export default Delivery;