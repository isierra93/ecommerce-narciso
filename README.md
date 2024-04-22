# Aplicacion Ecommerce

Ecommerce creado con React. Se puede realizar filtrado de productos y cuenta con carrito de compras, el cual genera un Checkout con Mercadopago.
Tiene formulario de consultas y compras, se genera Checkout con Mercadopago.
La base de datos de pagos esta en Supabase y la de productos/consultas en Firebase. 

## Deploy
-[Narciso Ecommerce](https://ecommerce-narciso.vercel.app/)

## Screenshoot
![Logo](https://i.postimg.cc/L8NnjBNG/narciso2-min.png)

## Checkout Pro MercadoPago

- [Mercadopago](https://www.mercadopago.com.ar/developers)

## API Node JS

-[NodeJS](https://github.com/isierra93/NodeJS-Mercadopago)

## Base de datos

- [Firebase](https://firebase.google.com/)


## Ejectuar localmente

Clonar el proyecto

```bash
  git clone https://github.com/isierra93/ecommerce-narciso
```

Ir al directorio del proyecto

```bash
  cd ecommerce-narciso
```

Instalar dependencias

```bash
  npm install
```

Agregar variables de entorno

#### Mercadopago 
```bash
    Public Key

    REACT_APP_INIT_MERCADOPAGO

    NodeJS API

    REACT_APP_URL_NODEJSMERCADOPAGO
    REACT_APP_URL_REDIRECT
```

#### Firebase
```bash
    REACT_APP_API_KEY="AIzaSyDdkvr1FenJ1VftugcfjSMLWPap-2KWIUM"
    REACT_APP_AUTH_DOMAIN="e-commerce-33adc.firebaseapp.com"
    REACT_APP_PROJECT_ID="e-commerce-33adc"
    REACT_APP_STORAGE_BUCKET="e-commerce-33adc.appspot.com"
    REACT_APP_MESSAGEING_SENDER_ID="43298774679"
    REACT_APP_APP_ID="1:43298774679:web:a95ba0825eca20256d53d2"
```

Ejecutar el servidor local

```bash
  npm start
```
