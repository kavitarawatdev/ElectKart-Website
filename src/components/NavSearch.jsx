import { BsSearch } from "react-icons/bs";
import { useFilterContext } from "../hooks/customHook";
import { useNavigate } from "react-router-dom";

export const NavSearch = ({isMobileMenuOpen, setIsMobileMenuOpen}) => {
    const { filter: { text, },  handleFilterUpdate} = useFilterContext()
    const navigate = useNavigate()
     const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const handleFormSubmit=(e)=>{
        e.preventDefault(); // Prevent default page reload
        if(isMobileMenuOpen) {
            scrollToTop()
            setIsMobileMenuOpen(false)
        }
        navigate("/products"); // Redirect to product page
    }
    
    return (
            <div className='container md:w-fit md:px-0 md:py-0 md:mx-0'>
                <form className="form flex-centered gap-3 bg-gray-100 p-2 rounded-xl h-10 mx-3 lg:mx-0"
                    onSubmit={(e) => handleFormSubmit(e)}>
                    <input
                        type="text" className='outline-0 text-gray-900 w-full md:min-w-70 lg:w-50 xl:w-80'
                        placeholder="Search for products, brands and more" aria-label="user-search"
                        name="text" value={text} onChange={handleFilterUpdate}
                    />
                    <BsSearch className='icon-xs text-gray-900'/>
                </form>
            </div>
    );
};