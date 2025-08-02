export const filterReducer = (state, action) => {
    switch (action.type) {
        case "SET_FILTER_LOADING":
            return {
                ...state,
                isFilterLoading: true,
                isFilterError: false,
            };
        // ===============================================
        case "SET_FILTER_ERROR":
            return {
                ...state,
                isFilterLoading: false,
                isFilterError: true,
            };
        // ===============================================
        case "SET_FILTER_PRODUCTS":{

            let maximumPrice= Math.max(...action.payload.map((product) => product.price));
            let minimumPrice = Math.min(...action.payload.map((product) => product.price));
             return {
                ...state,
                isFilterError: false,
                isFilterLoading: false,
                allProducts: [...action.payload],
                filterProducts: [...action.payload],
                filter: {
                    ...state.filter,
                    minPrice: minimumPrice,
                    maxPrice: maximumPrice+4000,
                    price: maximumPrice,
                },
            };
        }
           
        //  ==============================================
        // ==================================
        case "SORTING_DATA": {
            let tempFilterProducts = [...state.filterProducts];
            let tempSortedData;
            switch (action.payload) {
                case "price-A-Z":
                    tempSortedData = tempFilterProducts.sort((a, b) =>
                        a.name.localeCompare(b.name)
                    );
                    break;
                case "price-Z-A":
                    tempSortedData = tempFilterProducts
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .reverse();
                    break;
                case "price-lowest":
                    tempSortedData = tempFilterProducts.sort((a, b) => a.price - b.price);
                    break;
                case "price-highest":
                    tempSortedData = tempFilterProducts.sort((a, b) => b.price - a.price);
                    break;
                default:
                    tempSortedData = tempFilterProducts;
                    break;
            }
            return {
                ...state,
                sortingValue: action.payload,
                filterProducts: tempSortedData,
            };
        }
        // ==================================
        case "UPDATE_FILTER_VALUE": {
            const { name, val } = action.payload;

            return {
                ...state,
                filter: {
                    ...state.filter,
                    [name]: val,
                }
            };
        }
        

        // ==================================
        case "UPDATE_FILTER_PRODUCTS": {
            const { text, category, company, color, price, minPrice, maxPrice } = state.filter;
            let tempFilteredProduct = [...state.allProducts];

            // text
            if (text.trim() !== "") {
                tempFilteredProduct = tempFilteredProduct.filter((product) =>
                    product.name.toLowerCase().includes(text.toLowerCase())
                );
            }

            // category
            if (!category.includes("all")) {
                tempFilteredProduct = tempFilteredProduct.filter((product) =>
                    category.includes(product.category.toLowerCase())
                );
            }

            // company
            if (company!== "all") {
                tempFilteredProduct = tempFilteredProduct.filter((product) =>
                    product.company.toLowerCase() === company.toLowerCase()
                );
            }

            // colors
            if (color !== "all") {
                tempFilteredProduct = tempFilteredProduct.filter((product) =>
                    product.colors.includes(color)
                );
            }
            // price
            if(price < maxPrice){
                tempFilteredProduct = tempFilteredProduct.filter((product) =>
                    product.price <= price
                );
            }

            return {
                ...state,
                filterProducts: tempFilteredProduct,
            };
        }
        // ==================================
        case "CLEAR_FILTERS":
            return {
                ...state,
                filter: {
                    text: "",
                    category: "all",
                    company: "all",
                    color: "all",
                    minPrice: state.filter.minPrice,
                    maxPrice: state.filter.maxPrice + 4000,
                    price: state.filter.maxPrice,
                },
                sortingValue: "",
            };
        // ==================================
        case "SET_GRID_VIEW":
            return {
                ...state,
                gridView: true,
                listView: false,
            };

        case "SET_LIST_VIEW":
            return {
                ...state,
                gridView: false,
            };

        default:
            return state;
    }
};
