import { createContext, useEffect, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

const CartContext = createContext();

const getLSCartData = () => {
    try {
        let cartData = localStorage.getItem("user-Elec-Cart");
        
        if (!cartData || cartData === undefined ) {
            return [ ];
        }
        console.log("cartData", cartData);
        const parsedCart = JSON.parse(cartData);
        return Array.isArray(parsedCart) ? parsedCart : [];
    } catch (error) {
        console.log(error);
        return [];
    }
}

const initialState = {
    cart: getLSCartData(),
    total_item: "",
    total_amount: "",
    shipping_fee: 500,
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const handleAddToCart = (colorChoice, quantity, _id, indProduct) => {
        dispatch({ type: 'ADD_TO_CART', payload: { colorChoice, quantity, _id, indProduct } });
    }

    const handleRemoveFromCart = (id) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
    }

    const handleClearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    }

    const handleIncrement=(id)=>{
        dispatch({type:"INCREASE_QUANTITY", payload:id})
    }
    const handleDecrement=(id)=>{
        dispatch({type:"DECREASE_QUANTITY", payload:id})
    }

    useEffect(() => {
        dispatch({type:"TOTAL_CART_ITEMS"})
        dispatch({type:'TOTAL_CART_PRICE'})
        localStorage.setItem("user-Elec-Cart", JSON.stringify(state.cart));
    }, [state.cart])

    return (
        <CartContext.Provider value={{ ...state, handleAddToCart, handleRemoveFromCart, handleClearCart, handleIncrement, handleDecrement }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContext;