import { BsCart3 , BsSearch} from "react-icons/bs";
export const navlinks=[
    {
        label:"Home",
        link:"/",
    },
    {
        label:"About",
        link:"/about",
    },
    {
        label:"Products",
        link:"/products",
    },
    {
        label:"Contacts",
        link:"/contact",
    },
]

export const headerBtns  = [
    {
        label:"cart-trolley",
        link:"/cart",
        icon:<BsCart3/>
    },
    {
        label:"search-btn",
        link:"/search",
        icon:<BsSearch/>
    },
]