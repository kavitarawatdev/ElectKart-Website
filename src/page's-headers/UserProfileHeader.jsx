import { useAuth0 } from "@auth0/auth0-react";

export const UserProfileHeader = ({ total_item}) => {
    const {user} = useAuth0();

    return (
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-5 md:p-6 mb-4 sm:mb-5 md:mb-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 sm:space-x-4">
                
                {/* Profile Image Section */}
                <div className="relative flex-shrink-0">
                    <img
                        src={user.picture}
                        alt={user.given_name}
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover ring-2 sm:ring-3 md:ring-4 ring-blue-200"
                    />
                    <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 bg-green-500 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full border-1 sm:border-2 border-white"></div>
                </div>
                
                {/* User Info Section */}
                <div className="flex-1 text-center sm:text-left min-w-0">
                    <h5 className="heading-6 sm:heading-5 font-bold text-gray-800 mb-1 sm:mb-0">
                        <span className="block sm:inline">Hi {user.given_name}! 👋</span>
                    </h5>
                    <p className="text-gray-600 para-sm sm:para-md lg:para-lg">
                        <span className="block sm:inline">
                            You have <span className="font-semibold text-blue-600">{total_item}</span> 
                            {' '}{total_item === 1 ? 'item' : 'items'} in your cart
                        </span>
                        <span className="hidden sm:inline"> • </span>
                        <span className="block sm:inline mt-1 sm:mt-0">Ready to checkout?</span>
                    </p>
                </div>
                
                {/* Premium Badge Section */}
                <div className="flex-shrink-0 w-full sm:w-auto text-center sm:text-right">
                    <div className="bg-blue-100 text-blue-800 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full para-xs sm:para-sm font-medium inline-block">
                        <span className="hidden sm:inline">Premium Member</span>
                        <span className="sm:hidden">Premium</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
