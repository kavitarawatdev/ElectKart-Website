import { CartItem } from "../components/CartItem";
import { useCartContext } from "../hooks/customHook";
import { UserProfileHeader } from "../page's-headers/UserProfileHeader";
import { CartHeader } from "../page's-headers/CartHeader";
import { BiShoppingBag } from "react-icons/bi";
import { PromoCode } from "./PromoCode";
import { OrderSummary } from "./OrderSummary";
import { useAuth0 } from "@auth0/auth0-react";

export const ShoppingCart = () => {
    const { cart, total_item } = useCartContext();
    const {isAuthenticated, user} = useAuth0();
    return (
        <section className='section common-section flex flex-col gap-3 sm:gap-4 md:gap-5'>
            <div className="container">

                {/* header */}
                <div className="mb-4 sm:mb-5 md:mb-6">
                    {isAuthenticated && user  ?
                        <UserProfileHeader total_item={total_item} /> :
                        <CartHeader total_item={total_item}/>
                    }
                </div>

                {/* item details */}
                <div className='bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-2 sm:p-4 md:p-6 mb-4 sm:mb-5 md:mb-6'>
                    
                    {/* Cart Header */}
                    <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 border-b border-gray-200 sm:border-b-2 mb-3 sm:mb-4">
                        <BiShoppingBag className="highlight-para icon-sm sm:icon-md" />
                        <h5 className="heading-6 sm:heading-5 font-bold text-gray-800">
                            Shopping Cart
                            <span className="para-sm sm:para-md text-gray-600 font-normal ml-1 sm:ml-2">
                                ({total_item} {total_item === 1 ? 'item' : 'items'})
                            </span>
                        </h5>
                    </div>

                    {/* Desktop Table Header - Hidden on Mobile */}
                    <div className='hidden lg:grid lg:justify-items-center lg:grid-cols-5 gap-3 lg:gap-5 items-center text-gray-600 border-gray-200 lg:border-b-2 p-3'>
                        <h6 className="heading-6 p-1 font-semibold">Product</h6>
                        <h6 className="heading-6 p-1 font-semibold">Price</h6>
                        <h6 className="heading-6 p-1 font-semibold">Quantity</h6>
                        <h6 className="heading-6 p-1 font-semibold">Total</h6>
                        <h6 className="heading-6 p-1 font-semibold">Remove</h6>
                    </div>

                    {/* Mobile Table Header */}
                    <div className='grid-centered grid-cols-3 md:grid-cols-4 lg:hidden gap-2 p-2 text-gray-600 border-b border-gray-200 text-center'>
                        <h6 className="para-sm font-semibold">Product</h6>
                        <h6 className="para-sm font-semibold">Price</h6>
                        {/* qty hiiden in mobile */}
                        <h6 className="para-sm font-semibold hidden md:flex">Qty</h6>
                        <h6 className="para-sm font-semibold">Action</h6>
                    </div>

                    {/* Cart Items Container */}
                    <div className="">
                        {cart?.map((currEle) => {
                            return (
                                <CartItem
                                    key={currEle.id}
                                    {...currEle}
                                />
                            );
                        })}
                    </div>

                    {/* Empty Cart Message */}
                    {(!cart || cart.length === 0) && (
                        <div className="text-center py-8 sm:py-12">
                            <BiShoppingBag className="icon-lg text-gray-300 mx-auto mb-3 sm:mb-4" />
                            <h6 className="heading-6 text-gray-500 mb-2">Your cart is empty</h6>
                            <p className="para-md text-gray-400">Add some items to get started!</p>
                        </div>
                    )}

                    {/* Promo Code - Only show if cart has items */}
                    {cart && cart.length > 0 && (
                        <div className="mt-4 sm:mt-6">
                            <PromoCode />
                        </div>
                    )}
                </div>

                {/* billing-details - Only show if cart has items */}
                {cart && cart.length > 0 && (
                    <OrderSummary />
                )}

            </div>
        </section>
    );
};
