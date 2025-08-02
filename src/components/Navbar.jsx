import { NavLink } from "react-router-dom";
import { navlinks, } from "../data/header-data";

export const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='flex gap-8'>
                {navlinks.map(list=>{
                const{label,link}=list
                    return(
                        <li key={label} className='link para-lg'>
                            <NavLink to={link}>
                                {label}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
};