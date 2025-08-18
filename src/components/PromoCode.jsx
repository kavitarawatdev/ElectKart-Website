import { CiGift } from "react-icons/ci";
import { useCartContext } from "../hooks/customHook";
import { FormatPrice } from "../helper/FormatPrice";
import { useState } from "react";
import { PromoPopup } from "../popup components/PromoPopup";

export const PromoCode = () => {
    const [isClose, setClose] = useState(true);
    const { 
        promo_discount: discount, 
        applied_code, 
        setPromoCode, 
        handlePromoCodeSubmit, 
        handleRemoveCode 
    } = useCartContext();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!applied_code.trim()) return; // Prevent empty submissions
        
        handlePromoCodeSubmit(applied_code.trim());
        setClose(false); // Show popup after submission
    };

    const handleRemovePromoCode = () => {
        handleRemoveCode();
        setClose(true); // Ensure popup is closed when removing code
    };

    return (
        <>
            {/* Promo Popup */}
            {!isClose && <PromoPopup isClose={isClose} setClose={setClose} />}

            {/* Applied Promo Code Display */}
            {discount > 0 && applied_code ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="flex items-center gap-2">
                            <CiGift className="text-green-600 icon-sm sm:icon-md" />
                            <span className="para-sm sm:para-md text-green-700 font-medium">
                                Code "{applied_code}" applied! 
                                <span className="ml-1 font-semibold">
                                    <FormatPrice price={discount} /> saved
                                </span>
                            </span>
                        </div>
                        <button
                            onClick={handleRemovePromoCode}
                            className="btn para-sm sm:para-md text-green-600 hover:text-green-700 hover:bg-green-100 px-2 py-1 rounded transition-colors"
                            type="button"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ) : (
                /* Promo Code Input Form */
                <div className="border-t border-gray-200 bg-gray-50 rounded-b-lg p-4 sm:p-6">
                    <form onSubmit={handleFormSubmit} className="space-y-3">
                        <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
                            <CiGift className="highlight-para icon-md flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                                <input
                                    type="text"
                                    placeholder="Enter promo code"
                                    value={applied_code}
                                    onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                                    className="common-input-field w-full"
                                    maxLength={20}
                                />
                            </div>
                            <button 
                                className="common-btn btn px-4 py-2 sm:px-6 whitespace-nowrap"
                                type="submit"
                                disabled={!applied_code.trim()}
                            >
                                Apply
                            </button>
                        </div>
                        
                        {/* Promo Code Suggestions */}
                        <div className="text-center sm:text-left">
                            <p className="para-sm text-gray-600">
                                💡 Try: 
                                <button
                                    type="button"
                                    onClick={() => setPromoCode('SAVE20')}
                                    className="btn mx-1 px-2 py-1 bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-100 transition-colors"
                                >
                                    SAVE20
                                </button>
                                for 20% off or 
                                <button
                                    type="button"
                                    onClick={() => setPromoCode('WELCOME')}
                                    className="btn mx-1 px-2 py-1 bg-white border border-gray-300 rounded text-gray-700 hover:bg-gray-100 transition-colors"
                                >
                                    WELCOME
                                </button>
                                for <FormatPrice price={500} /> off
                            </p>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};