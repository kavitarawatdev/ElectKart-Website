import { MdRemoveShoppingCart } from "react-icons/md";
import { FormatPrice } from "../helper/FormatPrice";
import { QuantityToggle } from "../helper/QuantityToggle";
import { useCartContext } from "../hooks/customHook";

export const CartItem = ({ id, name, img, price, quantity, color }) => {
    
    const { handleRemoveFromCart, handleIncrement, handleDecrement } = useCartContext();
    
    return (
        <>
            {/* Mobile Layout (< md) - 4 columns + stacked info */}
            <div className="lg:hidden p-2 gap-2">
                <div className="grid grid-cols-3 md:grid-cols-4 gap-2 items-center text-gray-600">
                    
                    {/* Product Column - Mobile and tablet */}
                    <div className="flex flex-col items-center gap-0.5 xs:gap-1 sm:gap-3 md:gap-4">
                        <figure className="flex-shrink-0">
                            <img 
                                src={img} 
                                alt={name} 
                                className="h-10 w-10 xs:h-12 xs:w-12 sm:h-12 sm:w-12 md:h-10 md:w-10 object-cover rounded-lg" 
                            />
                        </figure>
                        <div className="text-center">
                            <p className="para-xs sm:para-sm font-semibold text-gray-800 truncate w-[80%] xs:w-full mx-auto">
                                {name}
                            </p>
                            <div className="para-xs sm:para-sm flex items-center justify-center gap-0.5 mt-1">
                                Color: 
                                <span 
                                    style={{ backgroundColor: color }}
                                    className="inline-block w-2 h-2 sm:w-3 sm:h-3 rounded-full border border-gray-300"
                                ></span>
                            </div>
                        </div>
                    </div>

                   {/* quantity and price mobile*/}
                    <div className="text-center">
                         {/* Price Column - Mobile and  tablet */}
                        <strong className="para-sm sm:para-md text-gray-800">
                            <FormatPrice price={price} />
                        </strong>

                         {/* Quantity Column - Mobile */}
                        <div className=" md:hidden flex justify-center">
                            <div className="scale-75 sm:scale-90">
                                <QuantityToggle  
                                quantity={quantity}
                                setIncrement={() => handleIncrement(id)}
                                setDecrement={() => handleDecrement(id)}   
                                />
                            </div>
                        </div>

                    </div>

                    {/* Quantity Column -tblet */}
                    <div className="hidden md:flex justify-center">
                        <div className="scale-75 sm:scale-90">
                            <QuantityToggle  
                                quantity={quantity}
                                setIncrement={() => handleIncrement(id)}
                                setDecrement={() => handleDecrement(id)}   
                            />
                        </div>
                    </div>

                   
                    {/* Remove Button - Mobile */}
                    <div className="flex flex-col items-center gap-1">
                        <button 
                            className="btn text-red-500 icon-xs sm:icon-sm hover:text-red-600 hover:bg-red-50 p-1.5 rounded-full transition-colors" 
                            onClick={() => handleRemoveFromCart(id)}
                            aria-label="Remove item"
                        >
                            <MdRemoveShoppingCart />
                        </button>
                        <div className="para-xs text-center font-medium text-gray-700">
                            <FormatPrice price={price * quantity} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Layout (>= md) - 5 columns */}
            <div className="hidden lg:grid grid-cols-5 gap-3 lg:gap-5 items-center text-gray-600 p-3">
                
                {/* Product Column - Desktop */}
                <div className="flex items-center gap-4">
                    <figure className="flex-shrink-0">
                        <img 
                            src={img} 
                            alt={name} 
                            className="h-20 w-20 object-cover rounded-lg" 
                        />
                    </figure>
                    <div className="min-w-0">
                        <strong className=":para-lg text-gray-800 block">
                            {name}
                        </strong>
                        <p className="flex items-center gap-2 mt-1 para-sm text-gray-600">
                            Color: 
                            <span 
                                style={{ backgroundColor: color }}
                                className="inline-block w-4 h-4 rounded-full border border-gray-300"
                            ></span>
                        </p>
                    </div>              
                </div>

                {/* Price Column - Desktop */}
                <div className="text-center">
                    <strong className="para-lg text-gray-800">
                        <FormatPrice price={price} />
                    </strong>
                </div>

                {/* Quantity Column - Desktop */}
                <div className="flex justify-center">
                    <QuantityToggle  
                        quantity={quantity}
                        setIncrement={() => handleIncrement(id)}
                        setDecrement={() => handleDecrement(id)}   
                    />
                </div>

                {/* Total Column - Desktop */}
                <div className="text-center">
                    <strong className="para-md lg:para-lg text-gray-800">
                        <FormatPrice price={price * quantity} />
                    </strong>
                </div>

                {/* Remove Column - Desktop */}
                <div className="flex justify-center">
                    <button 
                        className="btn text-red-500 icon-sm lg:icon-md hover:text-red-600 hover:bg-red-50 p-2 rounded-full transition-colors" 
                        onClick={() => handleRemoveFromCart(id)}
                        aria-label="Remove item"
                    >
                        <MdRemoveShoppingCart />
                    </button>
                </div>
            </div>
        </>
    );
};
