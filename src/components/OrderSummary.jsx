import { FormatPrice } from "../helper/FormatPrice";
import { useCartContext} from "../hooks/customHook";
import { BiCreditCard } from "react-icons/bi";

export const OrderSummary = () => {
    const { total_amount, total_item, promo_discount: discount, applied_code } = useCartContext();
    const shipping_fee = total_amount > 2000 ? 0 : 500;
    
    return (
            <div className='bg-white shadow-lg sm:shadow-xl md:shadow-2xl rounded-xl sm:rounded-2xl mb-4 sm:mb-5 md:mb-6 p-4 sm:p-6 md:p-8 lg:p-10'>
                
                {/* Header */}
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                    <BiCreditCard className="icon-sm sm:icon-md highlight-para flex-shrink-0" />
                    <h5 className="heading-6 sm:heading-5 text-gray-800 font-bold">
                        Order Summary
                    </h5>
                </div>

                {/* Order Details */}
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-5">
                    
                    {/* Subtotal */}
                    <div className="flex justify-between items-start sm:items-center">
                        <span className="text-gray-600 para-sm sm:para-md lg:heading-6 leading-tight">
                            Subtotal 
                            <span className="block sm:inline">
                                ({total_item} {total_item === 1 ? 'item' : 'items'}):
                            </span>
                        </span>
                        <strong className="para-md sm:heading-6 text-gray-800 text-right">
                            <FormatPrice price={total_amount} />
                        </strong>
                    </div>

                    {/* Promo Discount */}
                    {discount > 0 && (
                        <div className="highlight-para flex justify-between items-start sm:items-center">
                            <span className="para-sm sm:para-md lg:heading-6 leading-tight">
                                Promo discount
                                <span className="block sm:inline text-xs sm:text-sm font-normal">
                                    ({applied_code})
                                </span>
                            </span>
                            <strong className="para-md sm:heading-6 text-right">
                                -<FormatPrice price={discount} />
                            </strong>
                        </div>
                    )}

                    {/* Shipping */}
                    <div className="flex justify-between items-center">
                        <span className="text-gray-600 para-sm sm:para-md lg:heading-6">
                            Shipping:
                        </span>
                        <strong className={`para-md sm:heading-6 ${shipping_fee === 0 ? 'highlight-para' : 'text-gray-800'}`}>
                            {shipping_fee === 0 ? (
                                "FREE"
                            ) : (
                                <FormatPrice price={shipping_fee} />
                            )}
                        </strong>
                    </div>

                    {/* Free Shipping Notification */}
                    {shipping_fee === 0 && (
                        <div className="bg-green-50 border border-green-200 p-2 sm:p-3 rounded-lg">
                            <p className="highlight-para para-sm sm:para-md font-semibold text-center sm:text-left">
                                🎉 <span className="hidden sm:inline">Congratulations! </span>
                                You qualified for FREE shipping
                            </p>
                        </div>
                    )}

                    {/* Total */}
                    <div className="border-t border-gray-300 pt-2 sm:pt-3 mt-3 sm:mt-4">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-800 font-bold para-lg sm:heading-5">
                                Total:
                            </span>
                            <strong className="highlight-para para-lg sm:heading-5">
                                <FormatPrice price={total_amount + shipping_fee - discount} />
                            </strong>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2 sm:space-y-3">
                    {/* Main Checkout Button */}
                    <button className="btn common-btn w-full bg-blue-600 hover:bg-blue-700 font-bold">
                        <span className="hidden sm:inline">Proceed to Checkout</span>
                        <span className="sm:hidden">Checkout</span>
                    </button>
                </div>

                {/* Mobile-only Quick Info */}
                <div className="sm:hidden mt-4 pt-3 border-t border-gray-200">
                    <div className="flex justify-between items-center text-gray-500 para-xs">
                        <span>Secure checkout</span>
                        <span>Free returns</span>
                        <span>24/7 support</span>
                    </div>
                </div>
            </div>
    );
};
