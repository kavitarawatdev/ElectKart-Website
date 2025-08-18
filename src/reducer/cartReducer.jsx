export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'TOTAL_CART_ITEMS': {
                const totalItems = state.cart?.reduce((accum, currVal)=>{
                    if (!currVal || typeof currVal.quantity !== 'number') return accum;
                    accum+=currVal.quantity
                    return accum;
                },0)
                return{
                    ...state,
                    total_item:totalItems
                }
        }

        case 'SET_CODE':{
            return{
                ...state,
                applied_code:action.payload
            }
        }

        case 'REMOVE_CODE':{
            return{
                ...state,
                applied_code:"",
                promo_discount:0
            }
        }
        case 'TOTAL_DISCOUNT_PRICE': {
            let discount=0
            switch (state.applied_code) {
                case 'SAVE20':
                    discount=state.total_amount*0.2
                    break;
                case 'WELCOME':
                    discount=800
                    break;   
                default:
                    discount=0
                    break;
            }
            return{
                ...state,
                promo_discount:discount
            }
        }

        case 'TOTAL_CART_PRICE':{
            const totalPrice=state.cart?.reduce((accum, currItem)=>{
                if (!currItem || typeof currItem.quantity !== 'number'||typeof currItem.price !== 'number') return accum;
                accum+=currItem.price*currItem.quantity
                return accum
            }, 0)

            return {
                ...state,
                total_amount:totalPrice,
            }
        }

        case 'ADD_TO_CART': {
            const { colorChoice, quantity, _id, indProduct } = action.payload;
            let cartProduct;
            cartProduct = {
                id: _id + colorChoice,
                name: indProduct.name,
                img: indProduct.img,
                price: indProduct.price,
                quantity,
                stock: indProduct.stock,
                color: indProduct.colors[colorChoice]
            }

            // Check if the product already exists in the cart
            const existingProductIndex = state.cart?.find(item => item.id === _id + colorChoice);
            if (existingProductIndex) {
                // If it exists, update the quantity
                let updatedCart = state.cart.map(item => {
                    if (item.id === _id + colorChoice) {
                        // Ensure the new quantity does not exceed stock
                        if (item.quantity + quantity > item.stock) {
                            return {
                                ...item,
                                quantity: item.stock // Set to stock limit if exceeded
                            };
                        }
                        let newQuantity = item.quantity + quantity;
                        return {
                           ...item,
                           quantity: newQuantity
                        }
                    }
                });

                return{
                    ...state,
                    cart: updatedCart, // Filter out any undefined items
                }
            } else {
                // If it doesn't exist, add the new product to the cart
                return {
                    ...state,
                    cart: [...state.cart, cartProduct],
                };
            }
        }

        case 'REMOVE_FROM_CART': {
            const { id } = action.payload;
            const updatedCart = state.cart.filter(item => item.id !== id);
            return {
                ...state,
                cart: updatedCart,
            };
        }

        case 'INCREASE_QUANTITY':{
             let updatedCart = state.cart.map(item => {
                    if (item.id === action.payload) {
                        // Ensure the new quantity does not exceed stock
                        if (item.quantity  === item.stock) {
                            return {
                                ...item,
                                quantity: item.stock // Set to stock limit if exceeded
                            };
                        }
                        let newQuantity = item.quantity + 1;
                        return {
                           ...item,
                           quantity: newQuantity
                        }
                    }
                });

            return{
                ...state,
                cart:updatedCart
            }

        }
           
        case 'DECREASE_QUANTITY':{
             let updatedCart = state.cart.map(item => {
                    if (item.id === action.payload) {
                        if (item.quantity <=1) {
                            return {
                                ...item,
                                quantity: 1 // Set to stock limit if exceeded
                            };
                        }
                        let newQuantity = item.quantity - 1;
                        return {
                           ...item,
                           quantity: newQuantity
                        }
                    }
                });

            return{
                ...state,
                cart:updatedCart
            }

        }
        case 'CLEAR_CART': {
            return {
                ...state,
                cart: [],
            };
        }
        default:
            return state;
    }
}   