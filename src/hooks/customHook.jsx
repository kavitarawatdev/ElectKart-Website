import { useContext } from "react";
import AppContext from "../context/productContext";
import FilterContext from "../context/filterContext";
import CartContext from "../context/cartContext";

export const useAppContext = () => {
    return useContext(AppContext)
};

export const useFilterContext=()=>{
    return useContext(FilterContext)
}

export const useCartContext=()=>{
    return useContext(CartContext)
}