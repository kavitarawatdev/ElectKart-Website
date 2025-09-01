import { createContext, useEffect, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

const CartContext = createContext();

const getLSCartData = () => {
    try {
        let cartData = localStorage.getItem("user-Elec-Cart");
        console.log("cardt data", cartData)
        
        if (!cartData || cartData === undefined ) {
            console.log(!cartData || cartData === undefined)
            return [ ];
        }
        const filteredArray = cartData.filter(item => item !== null);
        console.log("filtered array", filteredArray);
        const parsedCart = JSON.parse(filteredArray);
        console.log("parsedCart", parsedCart);
        console.log("ise parsedcart arry",Array.isArray(parsedCart))
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
    applied_code:"",
    promo_discount:"",
}

export const CartProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const setPromoCode=(value)=>{
        dispatch({type:'SET_CODE', payload:value})
    } 

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

    const handlePromoCodeSubmit=(applied_code)=>{
         dispatch({type:"TOTAL_DISCOUNT_PRICE", payload: applied_code})
    }

    const handleRemoveCode=()=>{
        dispatch({type:"REMOVE_CODE"})
    }

    useEffect(() => {
        dispatch({type:"TOTAL_CART_ITEMS"})
        dispatch({type:"TOTAL_DISCOUNT_PRICE"})
        dispatch({type:'TOTAL_CART_PRICE'})
        localStorage.setItem("user-Elec-Cart", JSON.stringify(state.cart));
    }, [state.cart])

    return (
        <CartContext.Provider value={{ ...state, handleAddToCart,handleRemoveCode, handleRemoveFromCart, handleClearCart, handleIncrement, handleDecrement, setPromoCode, handlePromoCodeSubmit }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;
// localStorage.removeItem("user-Elec-Cart")
