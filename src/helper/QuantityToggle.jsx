import { IoIosAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";

export const QuantityToggle = ({quantity ,setIncrement, setDecrement}) => {  
    return (
        <div className="cart-btn flex items-center gap-3">
            <RiSubtractFill className="flex-centered btn icon-md rounded-[50%] bg-gray-200 p-2" onClick={setDecrement} />
            <span className='flex-centered para-lg rounded-[50%] bg-gray-200 p-2 h-10 w-10'>{quantity}</span>
            <IoIosAdd className='flex-centered btn icon-md rounded-[50%] bg-gray-200 p-2' onClick={setIncrement} />
        </div>
    );
};