import { createContext, useEffect, useReducer } from "react";
import { useAppContext } from "../hooks/customHook";
import { filterReducer } from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
    isFilterLoading: false,
    isFilterError: false,
    filterProducts: [],
    allProducts: [],
    gridView: true,
    filter: {
        text: "",
        category: "all",
        company: "all",
        color: "all",
        minPrice: 0,
        maxPrice: 0,
        price: 0,
    },
    sortingValue: "",
};

export const FilterProvider = ({ children }) => {
    const { products } = useAppContext();

    const [state, dispatch] = useReducer(filterReducer, initialState);

    // set grid view
    const setGridView = () => {
        return dispatch({ type: "SET_GRID_VIEW" });
    }

    // set list view
    const setListView = () => {
        return dispatch({ type: "SET_LIST_VIEW" });
    }

    // sorting frunction
    const sortingFunc = (e) => {
        dispatch({ type: "SORTING_DATA", payload: e.target.value })
    }

    // update filter value
    const handleFilterUpdate = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: "UPDATE_FILTER_VALUE",
            payload: { name, val: value }
        });
    };

    // clear all filters
    const handleClearFilters = () => {
        dispatch({ type: "CLEAR_FILTERS" });
    };

    useEffect(() => {
        dispatch({ type: "UPDATE_FILTER_PRODUCTS" })
    }, [state.filter], );

    useEffect(() => {
        dispatch({ type: "SET_FILTER_PRODUCTS", payload: products })
    }, [products], state.sortingValue)

    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView, sortingFunc, handleFilterUpdate, handleClearFilters }}>
            {children}
        </FilterContext.Provider>
    );
};

export default FilterContext;