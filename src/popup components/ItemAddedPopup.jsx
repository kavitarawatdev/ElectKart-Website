import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FormatPrice } from '../helper/FormatPrice';
import { useCartContext } from '../hooks/customHook';
import { IoCloseSharp } from "react-icons/io5";
import { TiArrowBack } from 'react-icons/ti';
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { TimerBar } from "../helper/TimerBar";


export const ItemAddedPopup = ({ quantity, colorChoice, indProduct, hidePopup, setHidePopup }) => {
    const { total_item, total_amount } = useCartContext();


    useEffect(() => {
        setTimeout(() => {
            setHidePopup(!hidePopup)
        }, 3000);
    }, [hidePopup])

    return (
        <div className={`fixed inset-0 z-50 backdrop-blur-sm bg-blue-950/60 
                        ${hidePopup ? "hidden" : "flex-centered"} 
                        p-4 sm:p-6 md:p-8`}>
            
            {/* Modal Container */}
            <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl 
                           w-full max-w-sm sm:max-w-md md:max-w-lg 
                           p-4 sm:p-6 md:p-8 lg:p-10 
                           animate-fadeIn transform transition-all duration-300">
                
                {/* Close Button */}
                <button
                    onClick={() => setHidePopup(!hidePopup)}
                    className="absolute top-2 right-3 sm:top-3 sm:right-4 
                             text-gray-500 hover:text-red-500 transition-colors duration-200
                             p-1 rounded-full hover:bg-gray-100"
                    aria-label="Close popup"
                >
                    <IoCloseSharp className='icon-sm sm:icon-md' />
                </button>

                {/* Success Header */}
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 pr-8">
                    <IoMdCheckmarkCircleOutline className="text-green-500 icon-sm sm:icon-md flex-shrink-0" />
                    <h4 className="heading-5 sm:heading-4 font-semibold text-gray-800 leading-tight">
                        Item Added Successfully!
                    </h4>
                </div>

                {/* Product Details */}
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5 p-3 bg-gray-50 rounded-lg">
                    <img
                        src={indProduct.img}
                        alt={indProduct.name}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-contain 
                                 border border-gray-200 bg-white flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                        <h5 className="heading-6 sm:heading-5 text-gray-800 font-medium mb-1 sm:mb-2 
                                     line-clamp-2">
                            {indProduct.name}
                        </h5>
                        
                        {/* Color Selection */}
                        <div className='flex items-center gap-2 mb-1 sm:mb-2'>
                            <span className="para-sm text-gray-600">Color:</span>
                            <span 
                                style={{ backgroundColor: indProduct.colors[colorChoice] }}
                                className="inline-block w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-gray-300"
                                title={indProduct.colors[colorChoice]}
                            ></span>
                            <span className="para-sm text-gray-700 capitalize">
                                {indProduct.colors[colorChoice]}
                            </span>
                        </div>
                        
                        {/* Price and Quantity */}
                        <div className="flex items-center justify-between">
                            <p className="para-sm sm:para-md text-gray-600">
                                <FormatPrice price={indProduct.price} /> × {quantity}
                            </p>
                            <p className="para-sm sm:para-md font-semibold text-blue-600">
                                <FormatPrice price={indProduct.price * quantity} />
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* Timer Bar */}
                <div className="mb-4 sm:mb-5">
                    <TimerBar />
                </div>

                {/* Cart Summary */}
                <div className="border-t border-gray-200 pt-3 sm:pt-4 mb-4 sm:mb-6">
                    <div className="bg-blue-50 p-3 sm:p-4 rounded-lg space-y-2">
                        <div className="flex items-center justify-between">
                            <span className="para-sm sm:para-md text-gray-700 flex items-center gap-2">
                                <span>🛒</span>
                                <span>Total Items:</span>
                            </span>
                            <span className="para-sm sm:para-md font-semibold text-blue-600">
                                {total_item}
                            </span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                            <span className="para-sm sm:para-md text-gray-700 flex items-center gap-2">
                                <span>💰</span>
                                <span>Subtotal:</span>
                            </span>
                            <span className="para-md sm:para-lg font-bold text-blue-600">
                                <FormatPrice price={total_amount} />
                            </span>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    {/* Continue Shopping */}
                    <NavLink 
                        to={'/products'}
                        className="flex-1"
                        onClick={() => setHidePopup(!hidePopup)}
                    >
                        <button className='common-btn w-full flex-centered gap-2 
                                         bg-gray-500 hover:bg-gray-600 
                                         transition-all duration-200 transform hover:scale-105'>
                            <TiArrowBack className='icon-xs' />
                            <span className="para-sm sm:para-md">Continue Shopping</span>
                        </button>
                    </NavLink>

                    {/* Go to Cart */}
                    <NavLink 
                        to={'/cart'} 
                        className='flex-1'
                        onClick={() => setHidePopup(!hidePopup)}
                    >
                        <button className='common-btn w-full 
                                         bg-gradient-to-r from-blue-600 to-indigo-600 
                                         text-white font-semibold shadow-lg 
                                         hover:from-blue-700 hover:to-indigo-700
                                         transition-all duration-200 transform hover:scale-105'>
                            <span className="para-sm sm:para-md">Go to Cart</span>
                        </button>
                    </NavLink>
                </div>

                {/* Quick Actions - Mobile Only */}
                <div className="sm:hidden mt-4 text-center">
                    <p className="para-xs text-gray-500">
                        Swipe down or tap outside to close
                    </p>
                </div>
            </div>
        </div>
    );
};
