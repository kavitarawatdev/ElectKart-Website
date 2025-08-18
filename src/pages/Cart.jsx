import { EmptyCart } from "../components/EmptyCart";
import { ShoppingCart } from "../components/ShoppingCart";
import { useCartContext } from "../hooks/customHook";

export const Cart = () => {
    const { cart } = useCartContext();
    return (
        <>
            {cart.length > 0 ? <ShoppingCart/> : <EmptyCart/>}
        </>
    );
};