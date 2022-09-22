import React from "react";
import { useState } from "react";
import { useContext } from "react";

const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    const addProduct = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
            }));
        } else {
            setCart([...cart, { ...item, quantity }]);
        }}

        return (
            <CartContext.Provider value={{
                clearCart,
                isInCart,
                removeProduct,
                addProduct,
                cart
            }} >
                {children}
            </CartContext.Provider>
        )
    };

    export default CartProvider;