import { GoTriangleRight } from "react-icons/go";
import { NavLink } from "react-router-dom";

export const PageNavigation = ({ title }) => {
    return (
        <div className="container h-12 sm:h-14 md:h-16 lg:h-20 flex justify-start items-center">
            <p className="para-md sm:para-lg flex items-center gap-0">
                <NavLink 
                    to={'/'}
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                >
                    Home
                </NavLink>
                <GoTriangleRight className='icon-sm text-gray-400'/>

                <span className="highlight-para font-semibold">{title}</span>
            </p>
        </div>
    );
};
