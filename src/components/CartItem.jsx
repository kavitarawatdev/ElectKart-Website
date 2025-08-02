import { IoIosAdd } from "react-icons/io";
import { MdRemoveShoppingCart } from "react-icons/md";
import { RiSubtractFill } from "react-icons/ri";
import { FormatPrice } from "../helper/FormatPrice";
import { QuantityToggle } from "../helper/QuantityToggle";
import { useCartContext } from "../hooks/customHook";

export const CartItem = ({ id, name, img, price, quantity, color,}) => {
    console.log(quantity);
    
    const {handleRemoveFromCart, handleIncrement, handleDecrement}=useCartContext()
    return (
        <div key={id} className="grid grid-cols-5 gap-4 items-center para-lg justify-items-center text-gray-600 border-b-2 border-green-400">

            <div className="flex-centered gap-2">
                <figure>
                    <img src={img} alt={name} className="h-20 w-fit" />
                </figure>
                <div className='flex flex-col'>
                    <strong>{name}</strong>
                    <p className='flex items-center gap-3'>Color : <span style={{ backgroundColor: color }}
                    className="inline-block w-4 h-4 rounded-full border-1"></span></p>
                </div>              
            </div>

            <strong><FormatPrice price={price} /></strong>

            <QuantityToggle  
             quantity={quantity}
             setIncrement={()=>handleIncrement(id)}
             setDecrement={()=>handleDecrement(id)}   />

            <strong><FormatPrice price={price * quantity} /></strong>

            <button className="btn text-red-500 icon-sm" 
            onClick={()=>handleRemoveFromCart(id)}>
                <MdRemoveShoppingCart />
            </button>
        </div>
    );
};