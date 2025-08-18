import { GiCheckMark } from "react-icons/gi";
import { IoStar } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import { BsFillLightningFill } from "react-icons/bs";

export const TrustIndicator = () => {
    return (
        <>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 
                        mt-6 sm:mt-8 md:mt-10 
                        pt-6 sm:pt-8 md:pt-10 
                        border-t border-gray-200 
                        w-full max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-gray-600">
            <span className="text-green-500 text-lg sm:text-xl">
              <GiCheckMark/>
            </span>
            <span className="para-sm sm:para-md">100% Secure</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <span className="text-blue-500 text-lg sm:text-xl">
              <BsFillLightningFill/>
            </span>
            <span className="para-sm sm:para-md">Fast Service</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <span className="text-yellow-500 text-lg sm:text-xl">
              <IoStar/>
            </span>
            <span className="para-sm sm:para-md">5-Star Rated</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <span className="text-purple-500 text-lg sm:text-xl">
              <MdOutlineSupportAgent/>
            </span>
            <span className="para-sm sm:para-md">24/7 Support</span>
          </div>
        </div>
            
        </>
    );
};