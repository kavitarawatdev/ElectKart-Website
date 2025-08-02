import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer"

const API ="https://eleckart-api.onrender.com/api/products";

const initialState={
    isError:false,
    isLoading:false,
    products:[],
    featuredProducts:[],
    isIndLoading:false,
    isIndError:false,
    indProduct:{}
}

const AppContext = createContext();

export const DataProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)
   
    // for all products
    const getAllItems = async () => {
        dispatch({type:"SET_LOADING"})
        try {
            const response = await axios.get(API)
            const products = await response.data
            dispatch({type:"SET_API_DATA", payload:products.myData})
        } catch (error) {
            console.log(error);
            dispatch({type:"SET_ERROR"})
        }
    }

    //  for individual produc
    const getIndItem=async (URL) => {
        dispatch({type:"SET_IND_LOADING"})
        try {
            const response= await axios.get(URL);
            const indItem= await response.data;
            console.log(indItem);
            dispatch({type:"SET_IND_ITEM", payload:indItem})

        } catch (error) {
            dispatch({type:"SET_IND_ERROR", payload:error})
        }
    }

    useEffect(() => {
        getAllItems();
    }, [])

    return (
        <AppContext.Provider value={{...state, getIndItem}}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext