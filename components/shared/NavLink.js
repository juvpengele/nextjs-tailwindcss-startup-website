import React from "react"

const NavLiknk = React.forwardRef(({ onClick, href, children }, ref) => {
    return (
        <a 
            href={href} onClick={onClick} ref={ref}
            className="
                py-4 px-6 font-semibold text-gray-400 cursor-pointer
                flex flex-col items-center
                transition ease-in-out duration-300
                after:w-10 after:h-0.5 after:bg-transparent after:transition after:ease-in-out
                after:duration-300
                hover:text-blue-500 hover:after:bg-blue-500
            "
        >
        { children }
    </a>
    )
  })

export default NavLiknk;