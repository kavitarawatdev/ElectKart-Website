import { NavLink } from "react-router-dom";
import { navlinks, } from "../data/header-data";
import { useCartContext } from "../hooks/customHook";


export const Navbar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
    const {scrollToTop}= useCartContext()


    const handleLinkClick=()=>{
        scrollToTop()
        if(isMobileMenuOpen) {       
            setIsMobileMenuOpen(false)
        }
    }

    return (
        <nav className='container lg:w-fit'>
            <ul className={`flex flex-centered flex-col lg:flex-row gap-1 lg:gap-6 xl:gap-8`}>
                {navlinks.map((list) => {
                    const { label, link } = list;
                    return (
                        <li  onClick={handleLinkClick} 
                        key={label} className={`link w-full border-b border-blue-800 last:border-b-0 lg:border-0 p-1 lg:p-0`}>
                            
                            <NavLink to={link} 
                            className={({ isActive }) => `block transition-all duration-200 text-gray-200 para-lg lg:hover:scale-105
                               p-2 lg:p-0
                               hover:bg-blue-800 lg:hover:bg-blue-950 hover:text-yellow-400 rounded-md lg:rounded-none
                                ${isActive?
                                'text-yellow-400 font-semibold lg:pb-1 lg:border-b-2 border-yellow-400 bg-blue-800 lg:bg-blue-950'
                                : 'font-semibold lg:border-0 '
                                }
                            `}
                                aria-current={({ isActive }) => isActive ? 'page' : undefined}
                            >
                                {label}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>

            {/* Mobile-only footer info */}
                <div className="mt-4 pt-4 border-t border-blue-800 lg:hidden">
                    <div className="px-2 space-y-2">
                        <p className="para-xs text-gray-400">
                            Need help? Contact support
                        </p>
                        <div className="flex gap-4 text-gray-400">
                            <a href="tel:+1234567890" className="para-xs hover:text-yellow-400 transition-colors">
                                📞 Call us
                            </a>
                            <a href="mailto:support@eleckart.com" className="para-xs hover:text-yellow-400 transition-colors">
                                ✉️ Email
                            </a>
                        </div>
                    </div>
                </div>
        </nav>
    );
};
