import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";

export const UserNavLogin = () => {
    const [dropdown, setDropdown] = useState(false);
    // Auth0 hooks
    const { isAuthenticated, loginWithRedirect, logout, user} = useAuth0();

    const handleUserLogin = () => {
        loginWithRedirect({
            authorizationParams: {
                prompt: 'login'
            }
        });
        // Page will refresh
    };

    // const body=document.querySelector("body");
    // body.addEventListener("onClick",setDropdown(false))
    const handleUserLogout = () => {
        logout({
            logoutParams: {
                returnTo: window.location.origin
            }
        });
        // Page will refresh
    };

    if (isAuthenticated && user) {
        return (
            <>
            <div className="link para-md gap-1 flex relative"
            onClick={() => setDropdown(!dropdown)}>
                <div className="flex items-center gap-1 capitalize hover:text-yellow-400 transition-colors duration-200">
                    <FaRegUserCircle className="icon-sm " />
                    <span className=''>{user.given_name}</span>
                </div>

                <div className={`absolute logout-btn-container top-9 w-full bg-gray-600 items-center justify-center ${dropdown ? `flex flex-col gap-2` : `hidden`}`}>
                    <button onClick={handleUserLogout} className="common-btn logout-btn">
                        Logout
                    </button>
                </div>
            </div>
            </>
        );
    } else {
       return(    
            <div className="flex-centered link para-md flex gap-1 hover:text-yellow-400 transition-colors duration-200"
            onClick={handleUserLogin}>
                <FaRegUserCircle className="icon-sm" />
                <span>Log In/Sign In</span>
            </div>
       )
    }
};
