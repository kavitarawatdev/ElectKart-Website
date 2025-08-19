import { NavLink, useNavigate } from 'react-router-dom';
import { FaHome, FaArrowLeft } from 'react-icons/fa';

export const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className="section common-section min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex-centered">
            <div className="container text-center">
                <div className="">

                    <div className="flex-centered mb-6 sm:mb-8 lg:mb-10">
                        <div className="bg-gradient-to-tr from-blue-900 to-gray-700 p-1 animate-pulse relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200">
                            <img
                                src="https://res.cloudinary.com/dwwurx8fo/image/upload/v1755541228/Frame_3_vkpqtg.png"
                                alt="404 Error - Page Not Found"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* Error Content */}
                    <div className="space-y-4 sm:space-y-6 lg:space-y-8">

                        {/* Main Heading */}
                        <div>
                            <h2 className="heading-2 text-gray-800 font-bold mb-3 sm:mb-4">
                                Oops! Page Not Found
                            </h2>
                            <div className="heading-3 text-blue-500 font-mono tracking-widest mb-4 sm:mb-6">
                                ERROR 404
                            </div>
                        </div>

                        {/* Description */}
                        <div className="max-w-2xl mx-auto">
                            <p className="para-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                                It seems our tech robot couldn't find the page you're looking for.
                                Don't worry, even the best electronics sometimes need a reset!
                            </p>
                            <p className="para-md text-gray-500">
                                The page might have been moved, deleted, or you entered the wrong URL.
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="responsive-flex max-w-md mx-auto">
                            <NavLink
                                to="/"
                                className="common-btn flex items-center gap-2 sm:gap-3"
                            >
                                <FaHome className="icon-xs" />
                                Back to Home
                            </NavLink>

                            <button
                                onClick={() => navigate(-1)}
                                className="common-btn bg-gray-600 hover:bg-gray-700 flex items-center gap-2 sm:gap-3"
                            >
                                <FaArrowLeft className="icon-xs" />
                                Go Back
                            </button>
                        </div>

                        {/* Additional Help */}
                        <div className="mt-8 sm:mt-10 lg:mt-12">
                            <p className="para-sm text-gray-500 mb-3 sm:mb-4">
                                Need help finding something?
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                                <NavLink
                                    to="/products"
                                    className="text-blue-500 hover:text-blue-600 para-sm font-medium transition-colors duration-300"
                                >
                                    Browse Products
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    className="text-blue-500 hover:text-blue-600 para-sm font-medium transition-colors duration-300"
                                >
                                    About Us
                                </NavLink>
                                <NavLink
                                    to="/contact"
                                    className="text-blue-500 hover:text-blue-600 para-sm font-medium transition-colors duration-300"
                                >
                                    Contact Support
                                </NavLink>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom Decorative Element */}
                <div className="mt-12 sm:mt-16 lg:mt-20">
                    <div className="flex justify-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <p className="para-xs text-gray-400 mt-4">
                        ElecKart - Your Tech Journey Continues
                    </p>
                </div>

            </div>
        </div>
    );
};