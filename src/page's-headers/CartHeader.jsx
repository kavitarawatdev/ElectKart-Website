import { useAuth0 } from "@auth0/auth0-react";
import { BiShoppingBag } from "react-icons/bi";


export const CartHeader = ({total_item}) => {
        const { loginWithRedirect} = useAuth0();
        const handleUserLogin = () => {
            loginWithRedirect()
        }

    return (
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-5 md:p-6 mb-4 sm:mb-5 md:mb-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 sm:space-x-4">
                
                {/* Icon Section */}
                <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gray-200 flex-centered">
                        <BiShoppingBag className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-400" />
                    </div>
                </div>
                
                {/* Text Content Section */}
                <div className="flex-1 text-center sm:text-left min-w-0">
                    <h5 className="heading-6 sm:heading-5 text-gray-800 mb-1 sm:mb-0">
                        Hi there! 👋
                    </h5>
                    <p className="text-gray-600 para-sm sm:para-md lg:para-lg">
                        <span className="block sm:inline">
                            Please login or sign in to checkout your{' '}
                            <span className="font-semibold text-blue-600">{total_item}</span>
                            {' '}{total_item === 1 ? 'item' : 'items'}
                        </span>
                        <span className="hidden lg:inline"> • Continue as guest</span>
                    </p>
                </div>
                
                {/* Buttons Section */}
                <div className="flex-centered flex-row gap-2 sm:gap-3 w-full sm:w-auto">
                    <button
                        onClick={handleUserLogin}
                        className="btn common-btn order-2 sm:order-1"
                    >
                        <span className="hidden sm:inline">Login</span>
                        <span className="sm:hidden">Sign In</span>
                    </button>
                    <button 
                        onClick={handleUserLogin}
                        className="btn common-btn bg-blue-600 hover:bg-blue-700 order-1 sm:order-2"
                    >
                        <span className="hidden sm:inline">Sign Up</span>
                        <span className="sm:hidden">Create Account</span>
                    </button>
                </div>
            </div>
            
            {/* Mobile-only Guest Option */}
            <div className="sm:hidden mt-4 pt-4 border-t border-gray-200">
                <button className="w-full text-center para-sm text-gray-500 hover:text-blue-600 transition-colors duration-200">
                    Continue as guest →
                </button>
            </div>
        </div>
    );
};