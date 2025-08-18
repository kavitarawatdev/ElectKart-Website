import { TbShoppingCartDiscount } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export const EmptyCart = () => {
    return (
        <section className='section common-section'>
            <div className="container flex-centered flex-col">
                <div className="relative flex-centered w-24 h-24 mb-6 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 animate-pulse shadow-xl">
                    <TbShoppingCartDiscount className="w-10 h-10 text-white" />
                </div>
                <h4 className="heading-4 font-bold text-gray-800 mb-3 tracking-wide">
                    Oops! Your cart is empty
                </h4>
                <p className="para-lg text-gray-500  mb-6 ">
                    You haven’t added anything to your cart yet. Let’s find something cool to fill it!
                </p>
                <NavLink  to="/products">
                    <button className="btn common-btn px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold">
                        🛍️ Start Shopping
                    </button>
                </NavLink>

            </div>
        </section>
    );
};