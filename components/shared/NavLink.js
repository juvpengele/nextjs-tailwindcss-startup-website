import React from "react"
import { useRouter } from "next/router";
import propTypes from "prop-types";

const NavLink = React.forwardRef(({ onClick, href, children, path }, ref) => {
    
    const router = useRouter();

    const className = () => {
        const defaultClassName = `
        py-4 font-semibold text-gray-400 cursor-pointer
        flex flex-col items-center
        transition ease-in-out duration-300
        after:w-10 after:h-0.5 after:bg-transparent after:transition after:ease-in-out
        after:duration-300 hover:text-blue-500 hover:after:bg-blue-500 ml-10`;

        if(router.pathname !== path) {
            return defaultClassName;
        }


        return defaultClassName + ' text-blue-500 after:bg-blue-500';
    }
    
    return (
        <a 
            href={href} 
            onClick={onClick} ref={ref}
            className={className()}
        >
            { children }
        </a>
    )
  })

NavLink.displayName = "NavLink"
NavLink.prototype = {
    path: propTypes.string.isRequired
}

export default NavLink;