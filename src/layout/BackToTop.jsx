import { useEffect, useState } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

export const BackToTop = () => {         
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
            setVisible(false);
            }
        };

       window.addEventListener("scroll", toggleVisibility);
       return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        visible && (
            <button onClick={scrollToTop}
                className="fixed flex-centered btn bottom-10 right-6 w-10 sm:w-15 h-10 sm:h-15 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 animate-pulse text-white p-4 shadow-lg hover:bg-gray-700 transition"
            >
                <FaLongArrowAltUp className='icon-sm'/>
           </button>
        )
    );
};