const productReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        case "SET_ERROR":
            return {
                ...state,
                isError: true,
                isLoading: false,
            }

        case "SET_API_DATA":
            {
                const featured = action.payload.filter((ele) => ele.featured === true);
                return {
                    ...state,
                    isLoading: false,
                    isError: false,
                    products: action.payload,
                    featuredProducts: featured
                }
            }
        case "SET_IND_LOADING":
            return {
                ...state,
                isIndLoading: true,
                isIndError: false,
            }
        case "SET_IND_ERROR":
            return {
                ...state,
                isIndLoading: false,
                isIndError: true,
            }


        case "SET_IND_ITEM":
            return {
                ...state,
                isIndLoading: false,
                isIndError: false,
                indProduct: action.payload
            }

        default:
            return state;
    }
};
export default productReducer