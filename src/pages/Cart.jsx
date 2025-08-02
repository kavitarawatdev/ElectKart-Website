import { useCartContext } from "../hooks/customHook";
import { CartItem } from "../components/CartItem";
import { NavLink } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import { FormatPrice } from "../helper/FormatPrice";

export const Cart = () => {
    const { cart, handleClearCart, total_amount, shipping_fee } = useCartContext();
    return (
        <section className='section common-section flex flex-col gap-5'>
            <div className="container flex flex-col gap-2">
                <div className='grid grid-cols-5 gap-4 items-center text-gray-600 justify-items-center'>
                    <h6 className="heading-6"> Product</h6>
                    <h6 className="heading-6"> Price</h6>
                    <h6 className="heading-6"> Quantity</h6>
                    <h6 className="heading-6"> Total</h6>
                    <h6 className="heading-6"> Remove</h6>
                </div>
                <hr className='divider text-green-400 border-1' />
               
                {
                    cart?.map((currEle) => {
                        
                        return (
                            <CartItem
                                key={currEle.id}
                                {...currEle}
                            />
                        );
                    })
                }

                <div className="flex justify-between items-center mt-4">
                    
                    <NavLink to={'/products'}>
                        <button className='common-btn flex-centered gap-2'>
                            <TiArrowBack className='icon-sm' />
                             Continue Shopping
                        </button>                       
                    </NavLink>

                    <button className="btn common-btn" onClick={handleClearCart}>
                        Clear Cart
                    </button>
                </div>


            </div>

            <div className="container flex gap-5 text-gray-600 bg-yellow-100">
                <div className="grid grid-cols-[1fr_0.5fr] gap-5 w-full">
                    <div className='w-full'></div>
                    <div className='flex-col flex gap-2 p-3 border-2 border-green-500 para-lg w-full'>
                        <p className='border-b-1 p-2 flex items-center gap-3'> 
                            <strong>Sub Total : </strong> 
                            <strong><FormatPrice price={total_amount}/></strong>
                        </p>
                        <p className='border-b-1 p-2 flex items-center gap-3'> 
                            <strong>Shipping Fee : </strong> 
                            <strong><FormatPrice price={shipping_fee}/></strong>
                        </p>
                        <p className='border-b-1 p-2 flex items-center gap-3'> 
                            <strong>Grand Total : </strong> 
                            <h6 className='heading-4 font-extrabold'><FormatPrice price={total_amount + shipping_fee}/></h6>
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};