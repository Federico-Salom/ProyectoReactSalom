import { createContext, useState } from "react";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
console.log(cart)
    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            setCart(cart.map(prod => {
                if (prod.id === item.id && quantity + prod.quantity<=prod.stock) return {...prod, quantity: quantity + prod.quantity };
            
                return prod;
            }));
        }
    }
    
    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }


    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart}}>
            { children }
        </CartContext.Provider>
    )
}













export const CartContext = createContext({
    cart: []
})