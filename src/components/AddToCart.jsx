import { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { useCartContext } from "../hooks/customHook";
import { NavLink } from "react-router-dom";
import { QuantityToggle } from "../helper/QuantityToggle";


export const AddToCart = ({ indProduct }) => {
    const { _id,  colors, stock } = indProduct;
    const [colorChoice, setColorChoice] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const{handleAddToCart} = useCartContext()

    const setIncrement = ()=>{
        quantity < stock ? setQuantity(quantity + 1): setQuantity(stock);
    }

    const setDecrement = ()=>{
        quantity > 1 ? setQuantity(quantity - 1): setQuantity(1);
    }

    return (
        <>
            <div className="product-colors">
                <p className='flex items-center gap-3'>
                    Colors: {
                        colors?.map((clr, idx) => {
                            return (
                                <button key={idx} className={`btn para-sm border-green-400 ${idx == colorChoice ? "border-3" : "opacity-50 border-2"} rounded-[50%] p-2.5`}
                                    style={{ backgroundColor: clr }}
                                    onClick={() => setColorChoice(idx)}>
                                    {idx == colorChoice ? <GiCheckMark className='highlight-para font-extrabold' />
                                        : ""}
                                </button>
                            )
                        })
                    }
                </p>
            </div>

            <div className='flex flex-col gap-5'>
                <QuantityToggle quantity={quantity} setIncrement={setIncrement} setDecrement={setDecrement} />

                <NavLink to={'/cart'} className='common-btn para-lg'
                    onClick={() => handleAddToCart(colorChoice, quantity, _id, indProduct)}>
                    Add to Cart
                </NavLink>
            </div>
        </>
    );
};