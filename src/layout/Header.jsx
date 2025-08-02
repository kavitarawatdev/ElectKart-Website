import { NavLink } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { headerBtns } from "../data/header-data";
import { useCartContext } from "../hooks/customHook";

export const Header = () => {
    const{total_item}=useCartContext()
    return (
        <header className='section bg-green-400'>
            <div className="container bg-green-400 flex items-center justify-between">
                <div className="logo">          
                    <img src="https://res.cloudinary.com/dwwurx8fo/image/upload/v1752573522/elecKart-logo_rpipm2.png"
                     alt="logo" className="h-12" />
                </div>
            <div className='flex-centered gap-8'>
                <Navbar />
                <div className="header-btns">
                    <ul className='header-btns-list flex gap-8'>
                        {headerBtns.map(btn=>{
                        const {label, link, icon}=btn
                            return(
                                <li className={`flex-centered relative`} id={label} key={label}>
                                    <NavLink to={link} className='icon-sm'>
                                        {label=="cart-trolley"? <span className='absolute font-bold flex-centered p-1 bg-yellow-500 rounded-full -top-2.5 -right-2.5 text-[10px]'>{total_item}</span>:""}
                                        {icon}
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            </div>
        </header>
    );
};
