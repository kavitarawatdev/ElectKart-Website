import { NavLink } from "react-router-dom";

export const PageNavigation = ({title}) => {
    return (
        <div className="para-lg h-20 flex justify-start items-center">
            <NavLink to={'/'}>
                Home
            </NavLink>
            <span className="highlight-para">
                /{title}
            </span>
        </div>
    );
};