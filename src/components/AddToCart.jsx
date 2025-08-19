import { useState } from "react";
import { GiCheckMark, GiShoppingCart } from "react-icons/gi";
import { useCartContext } from "../hooks/customHook";
import {  useNavigate } from "react-router-dom";
import { QuantityToggle } from "../helper/QuantityToggle";
import { ItemAddedPopup } from "../popup components/ItemAddedPopup";
import { MdOutlineKeyboardBackspace } from "react-icons/md";


export const AddToCart = ({ indProduct }) => {
    const { _id, colors, stock } = indProduct;
    const [colorChoice, setColorChoice] = useState(0);
    const [hidePopup, setHidePopup] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const { handleAddToCart } = useCartContext()
    const navigate = useNavigate()

    const setIncrement = () => {
        quantity < stock ? setQuantity(quantity + 1) : setQuantity(stock);
    }

    const setDecrement = () => {
        quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
    }

    const handleShowPopup = () => {
        handleAddToCart(colorChoice, quantity, _id, indProduct)
        setHidePopup(false)
    }

    return (
        <>
            {/* Popup Modal */}
            {!hidePopup &&
                <ItemAddedPopup 
                    colorChoice={colorChoice} 
                    setHidePopup={setHidePopup}
                    quantity={quantity} 
                    id={_id + colorChoice} 
                    indProduct={indProduct}
                />
            }

            <div className="add-to-cart-section flex flex-col gap-4 sm:gap-5 md:gap-6 w-full">
                
                {/* Color Selection */}
                <div className="product-colors">
                    <div className='flex flex-col gap-2 sm:gap-3'>
                        <h6 className='heading-6 text-gray-800'>Choose Color:</h6>
                        <div className="color-options flex flex-wrap items-center gap-2 sm:gap-3">
                            {colors?.map((clr, idx) => {
                                return (
                                    <button 
                                        key={idx} 
                                        className={`btn rounded-full border-2 p-1.5 sm:p-2 md:p-2.5
                                                   w-8 h-8 sm:w-10 sm:h-10 
                                                   hover:scale-110 transition-all duration-200
                                                   ${idx === colorChoice 
                                                       ? "border-green-500 border-3 shadow-md scale-110" 
                                                       : "border-gray-300 opacity-70 hover:opacity-100"
                                                   }`}
                                        style={{ backgroundColor: clr }}
                                        onClick={() => setColorChoice(idx)}
                                        aria-label={`Select ${clr} color`}
                                        title={`Color: ${clr}`}
                                    >
                                        {idx === colorChoice && (
                                            <GiCheckMark className='text-white text-xs sm:text-sm md:text-base font-extrabold drop-shadow-sm' />
                                        )}
                                    </button>
                                )
                            })}
                        </div>
                        
                        {/* Selected Color Name */}
                        <p className="selected-color para-sm text-gray-600">
                            Selected: <span className="font-semibold text-gray-800 capitalize">{colors[colorChoice]}</span>
                        </p>
                    </div>
                </div>

                {/* Quantity and Actions Section */}
                <div className='quantity-actions-section flex flex-col gap-3 sm:gap-4 md:gap-5'>
                    
                    {/* Quantity Toggle */}
                    <div className="quantity-section">
                        <h6 className='heading-6 text-gray-800 mb-2 sm:mb-3'>Quantity:</h6>
                        <QuantityToggle 
                            quantity={quantity} 
                            setIncrement={setIncrement} 
                            setDecrement={setDecrement} 
                        />
                        
                        {/* Stock Info */}
                        <p className="stock-info para-xs sm:para-sm text-gray-500 mt-1 sm:mt-2">
                            {stock} items available
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="action-buttons flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 xl:gap-8 w-full">
                        
                        {/* Add to Cart Button */}
                        <button 
                            className='common-btn btn bg-blue-500 hover:bg-blue-600 
                                     w-full sm:w-auto flex-1 sm:flex-initial
                                     transform hover:scale-105 shadow-md hover:shadow-lg
                                     transition-all duration-200'
                            onClick={handleShowPopup}
                            disabled={stock === 0}
                        >
                            <span className="flex items-center justify-center gap-2">
                                Add to Cart
                                <span className="icon-sm hidden sm:inline">
                                    <GiShoppingCart/>
                                </span>
                            </span>
                        </button>

                        {/* Go Back Button */}
                        <button 
                            className="common-btn btn bg-gray-500 hover:bg-gray-600
                                     w-full sm:w-auto
                                     transform hover:scale-105 shadow-md hover:shadow-lg
                                     transition-all duration-200"
                            onClick={() => navigate(-1)}
                        >
                            <span className="flex items-center justify-center gap-2">
                                <span className="icon-sm hidden sm:inline">
                                    <MdOutlineKeyboardBackspace/>
                                </span>
                                Go Back
                            </span>
                        </button>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="additional-info bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-200">
                    <div className="flex items-start gap-2 sm:gap-3">
                        <span className="text-blue-500 text-lg sm:text-xl">ℹ️</span>
                        <div className="flex-1">
                            <h6 className="heading-6 text-blue-800 mb-1">Quick Info:</h6>
                            <ul className="para-xs sm:para-sm text-blue-700 space-y-1">
                                <li>• Free shipping on orders above ₹500</li>
                                <li>• Easy 30-day returns</li>
                                <li>• Secure payment options</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
