import { IoIosAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";

export const QuantityToggle = ({quantity ,setIncrement, setDecrement}) => {  
    return (
        <div className="cart-btn para-lg flex items-center gap-1.5 lg:gap-3">
            <RiSubtractFill className="icon-md flex-centered btn rounded-[50%] bg-gray-200 lg:p-2" onClick={setDecrement} />
            <span className='flex-centered rounded-[50%] bg-gray-200 p-2 h-5 w-5 md:h-8 md:w-8 lg:h-10 lg:w-10'>{quantity}</span>
            <IoIosAdd className='flex-centered icon-md btn rounded-[50%] bg-gray-200 lg:p-2' onClick={setIncrement} />
        </div>
    );
};