import { NavLink } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { useCartContext } from "../hooks/customHook";
import { BsCart3 } from "react-icons/bs";
import { UserNavLogin } from "../components/UserNavLogin";
import { NavSearch } from "../components/NavSearch";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

export const Header = () => {
    const { total_item, scrollToTop} = useCartContext();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const handleBtnClick=()=>{
        scrollToTop()
        if(isMobileMenuOpen){
            setIsMobileMenuOpen(false)
        }
    }

    return (
        <>
            {/* Main Header */}
            <header className='section bg-blue-950 text-gray-200 h-16 sm:h-18 md:h-20 flex-centered sticky top-0 z-50'>
                <div className="container bg-blue-950 flex items-center justify-between">

                    {/* Logo Section */}
                    <div className="logo flex-shrink-0">
                        <NavLink to="/" className="block flex-centered">
                            <img
                                src="https://res.cloudinary.com/dwwurx8fo/image/upload/v1752573522/elecKart-logo_rpipm2.png"
                                alt="ElecKart Logo"
                                className="object-contain 
                               filter brightness-150 hover:brightness-200
                               hover:scale-120
                               transition-all duration-300 ease-in-out
                               h-8 sm:h-9 md:h-10 lg:h-11 xl:h-12 w-auto"
                            />
                        </NavLink>
                    </div>

                    
                    <div className='flex-centered gap-3 lg:gap-4 xl:gap-6 2xl:gap-8'>

                        {/* moblie navigation hidden on tablets and desktop */}
                        <div className={`fixed section transition-all duration-900 backdrop-blur-md m-0 p-0 h-full left-0 lg:hidden 
                            ${isMobileMenuOpen?`top-16 sm:top-18 md:top-20`:"-top-full"}`}>
                            <div className='md:hidden bg-blue-950 p-3'>
                                <NavSearch isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen}/>
                            </div>
                            <div className='lg:hidden bg-blue-950 pb-6 pt-3'>
                                <Navbar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen}/> 
                            </div>                                
                        </div>

                        {/* for desktop view */}
                        <div className='hidden lg:flex'>
                            <Navbar />
                        </div>

                        <div className='hidden md:flex'>
                            <NavSearch isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen}/>
                        </div>      
                        
                        <UserNavLogin />

                        {/* header buttons*/}
                        <div className='flex-centered gap-3 lg:gap-4 xl:gap-6 2xl:gap-8'>
                            {/* CART BTN */}
                            <NavLink
                                to='/cart'
                                className='icon-sm xl:icon-md hover:text-yellow-400 transition-colors duration-200 p-2 relative'
                                aria-label={`Shopping cart with ${total_item} items`}
                                onClick={handleBtnClick}
                            >
                                {total_item > 0 && (
                                    <span className='absolute text-blue-950 font-extrabold w-5 h-5 sm:w-6 sm:h-6 flex-centered bg-yellow-500 rounded-full -top-1 -right-1 sm:-top-2 sm:-right-2 text-[10px] sm:text-xs'>
                                        {total_item > 10 ? '10+' : total_item}
                                    </span>
                                )}
                                <BsCart3 />
                            </NavLink>

                            {/* Mobile Menu Button */}
                            <button
                                className="lg:hidden flex-centered p-2 hover:bg-blue-900 rounded-md transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-label="Toggle mobile menu"
                                aria-expanded={isMobileMenuOpen}
                            >
                                <HiMenuAlt3 className="icon-sm" />
                            </button>
                        </div>


                    </div>
                </div>
            </header>

        </>
    );
};
