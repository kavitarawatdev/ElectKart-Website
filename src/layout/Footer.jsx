import { NavLink } from 'react-router-dom';
import { navlinks } from '../data/header-data';
import { useCartContext, useFilterContext } from '../hooks/customHook';
import { socialMedia } from '../data/contact-card-data';

export const Footer = () => {
    const { allProducts, handleFilterUpdate,  handleClearFilters } = useFilterContext()
    const {scrollToTop} = useCartContext()


    const handleLinkClick=(e)=>{
        scrollToTop()
        handleClearFilters()
        handleFilterUpdate(e)           
    }

    // to get the unique data
    const getUniqueData = (feature) => {
        const values = allProducts.map((product) => product[feature]);
        return [...new Set(values)];
    };

    const uniqueCategory = getUniqueData("category");
    return (
        <footer className="section bg-gray-900 text-white py-10 px-6">
            <div className="container grid grid-cols-2 md:grid-cols-4 gap-6">

                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">ElecKart</h2>
                    <p className="text-gray-400">
                        Your trusted destination for smartphones, laptops, accessories and more.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="gap-2 text-gray-300 text-sm flex flex-col">
                        {navlinks.map(data => {
                            const { label, link} = data;
                            return (
                                <NavLink to={link} key={label}
                                    className="para-sm capitalize text-gray-300 hover:text-white transition-colors duration-300"
                                    aria-label={label}>
                                    {label}
                                </NavLink>
                            )
                        })
                        }
                    </ul>
                </div>

                {/* Categories */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Categories</h3>
                    <ul className="gap-2 flex flex-col text-gray-300 text-sm">
                        {uniqueCategory.map(ele => {
                            return (
                                <li key={ele} >
                                    <NavLink to={"/products"}
                                     onClick={(e)=>handleLinkClick(e)}
                                     className="para-sm capitalize text-gray-300 hover:text-white transition-colors duration-300"
                                    ><input type="button" className="capitalize"
                                        value={ele} name="category" />
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                    <ul className="gap-4 text-gray-300 text-sm flex flex-col md:flex-row">
                        {socialMedia.map(data => {
                            const { label, link, icon } = data;
                            return (
                                <li key={label}
                                className='rounded-full p-2 bg-gray-300 w-fit  hover:bg-white hover:scale-110 transition-all duration-300'>
                                <NavLink to={link}
                                    className="icon-xs text-gray-800"
                                    aria-label={label}>
                                    {icon}
                                </NavLink>
                                </li>
                            )
                        })
                        }
                    </ul>
                </div>
            </div>

            <div className="container text-center text-gray-500 text-base mt-10">
                © 2025 ElecKart. Created with ❣️ by 
                <NavLink to={"https://www.linkedin.com/in/kavitarawat11/"}
                target='_blank'
                rel='noopener noreferrer'
                className=''> Kavita Rawat. </NavLink> 
                All rights reserved.
                
            </div>
        </footer>
    );
};

