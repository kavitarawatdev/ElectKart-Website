import { FormatPrice } from "../helper/FormatPrice";
import { FiCheckCircle } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { useCartContext } from "../hooks/customHook";
import { CornerEmojis } from "../decorative components/CornerEmojis";
import { useEffect } from "react";
import { TimerBar } from "../helper/TimerBar";

export const PromoPopup = ({ setClose, isClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            setClose(!isClose);
        }, 3000);
        
        return () => clearTimeout(timer); // Cleanup timer
    }, [isClose, setClose]);
    
    const { promo_discount: discount, applied_code: code } = useCartContext();
    
    return (
        <div className={`h-screen w-screen section common-section fixed inset-0 bg-blue-950/60 z-50 backdrop-blur-sm px-4 sm:px-6 md:px-8
            ${isClose ? "hidden" : "flex-centered"}`}>
            {/* Modal Container */}
            <div className={`
                bg-white rounded-xl sm:rounded-2xl shadow-2xl relative animate-fadeIn w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
                p-4 sm:p-6 md:p-8 lg:p-10 max-h-[90vh] overflow-y-auto`}>            
                {/* Close Button */}
                <button onClick={() => setClose(!isClose)}
                    className="btn absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 icon-sm sm:icon-md z-10 highlight-para 
                    hover:text-red-500 hover:bg-red-50 p-1.5 sm:p-2 rounded-full transition-all duration-200"
                    aria-label="Close popup"
                ><IoCloseSharp />
                </button>
                {/* Decorative Corner Animations */}
                <CornerEmojis discount={discount}/>

                {/* Timer Bar */}
                <div className="mb-4 sm:mb-6">
                    <TimerBar />
                </div>

                {/* Main Content */}
                <div className="flex-centered flex-col gap-2 sm:gap-3 md:gap-4 w-full relative z-10">
                    
                    {/* Central Icon with Celebration Effects */}
                    <div className="relative mb-3 sm:mb-4 md:mb-6 w-full flex-centered">
                        <div className={`
                            flex-centered rounded-full p-2 sm:p-3 md:p-4 w-fit
                            ${discount > 0 ? 'bg-green-100' : 'bg-red-100'}
                        `}>
                            <FiCheckCircle className={`
                                icon-sm sm:icon-md md:icon-lg
                                ${discount > 0 ? 'text-green-600' : 'text-red-600'}
                            `} />
                        </div>
                        
                        {/* Celebration Dots - Only for success */}
                        {discount > 0 && (
                            <div className="absolute inset-0 flex-centered w-full">
                                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full animate-ping absolute -top-1 left-0" />
                                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-pink-500 rounded-full animate-ping absolute -top-1 right-0" 
                                     style={{ animationDelay: '0.5s' }} />
                                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full animate-ping absolute -bottom-2 left-0" 
                                     style={{ animationDelay: '1s' }} />
                                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-full animate-ping absolute -bottom-2 right-0" 
                                     style={{ animationDelay: '1.5s' }} />
                            </div>
                        )}
                    </div>

                    {/* Main Heading */}
                    <h4 className={`
                        heading-5 sm:heading-4 md:heading-3 text-center
                        ${discount > 0 ? 'text-gray-900' : 'text-red-700'}
                        mb-1 sm:mb-2
                    `}>
                        {discount > 0 ? "Yayyy! 🎉" : "Oops! 😞"}
                    </h4>

                    {/* Subtitle Message */}
                    <p className={`
                        para-sm sm:para-md md:para-lg text-center
                        ${discount > 0 ? 'text-gray-700' : 'text-red-600'}
                        mb-3 sm:mb-4 md:mb-5 px-2
                    `}>
                        {discount > 0 ? (
                            <>
                                You get <strong className='highlight-para text-green-600'>
                                    <FormatPrice price={discount} /> off
                                </strong> your order!
                            </>
                        ) : (
                            "The promo code you entered is not valid"
                        )}
                    </p>

                    {/* Promo Code Display */}
                    {discount > 0 ? (
                        <div className="flex-centered flex-col bg-gray-50 border border-gray-200 rounded-lg p-3 sm:p-4 md:p-5 w-full">
                            <p className="para-xs sm:para-sm text-gray-600 mb-1 sm:mb-2">
                                Promo code applied:
                            </p>
                            <div className="flex-centered gap-2 bg-white border-2 border-dashed border-green-400 rounded-lg px-3 py-2 sm:px-4 sm:py-2">
                                <span className="heading-6 sm:heading-5 text-green-700 font-mono">
                                    {code}
                                </span>
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4 w-full text-center">
                            <p className="para-sm sm:para-md text-red-700">
                                "<span className="font-mono font-semibold">{code}</span>" is not a valid promo code
                            </p>
                            <p className="para-xs sm:para-sm text-red-600 mt-1 sm:mt-2">
                                Please check the code and try again
                            </p>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full mt-3 sm:mt-4 md:mt-5">
                        {discount > 0 ? (
                            <>
                                <button 
                                    onClick={() => setClose(!isClose)}
                                    className="btn common-btn bg-green-600 hover:bg-green-700 w-full sm:w-auto"
                                >
                                    <span className="sm:hidden">Continue</span>
                                    <span className="hidden sm:inline">Continue Shopping</span>
                                </button>
                                <button 
                                    onClick={() => setClose(!isClose)}
                                    className="btn common-btn bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
                                >
                                    Checkout Now
                                </button>
                            </>
                        ) : (
                            <button 
                                onClick={() => setClose(!isClose)}
                                className="btn common-btn bg-gray-600 hover:bg-gray-700 w-full"
                            >
                                Try Another Code
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
