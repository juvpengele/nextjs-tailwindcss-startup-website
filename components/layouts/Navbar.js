import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../shared/Button";
import NavLink from "../shared/NavLink";
import { useRouter } from 'next/router'

const routes = [
    { path: "/pricing", label: "Pricing"},
    { path: "/about-us", label: "About Us"},
    { path: "/contact", label: "Contact"},
    { path: "/login", label: "Login"},
]


function Navbar() {
    const [showMenu, setShowMenu] = React.useState(false);
    const router = useRouter();

    console.log(router);

    const menuClassName = () => {
        const defaultClassNames = "transition-all duration-300 w-full flex flex-col lg:flex-row lg:w-2/3 items-center lg:justify-end";

        if(showMenu) {
            return defaultClassNames + " h-0 max-h-0 overflow-hidden";
        }

        return defaultClassNames;
    }

    return (
        <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center 
            justify-between py-6 px-4"
        >
            <div className="flex items-center justify-between w-full lg:w-1/3">
                <Link href="/"><a>
                    <Image 
                        src="/assets/img/logo.svg"
                        height={70} 
                        width={70}
                        alt="Logo"
                    />
                </a></Link>
                <div className="flex lg:hidden">
                    <a className="px-6 text-blue-700 font-semibold cursor-pointer"
                        onClick={() => setShowMenu(! showMenu)}
                    >Menu</a>
                </div>
            </div>
            
            <div className={menuClassName()}>
                {
                    routes.map(({ label, path}) => (
                        <Link href={path} key={label} 
                            passHref>
                            <NavLink path={path}>{label}</NavLink>
                        </Link>
                    ))
                }
                
                <Button href="#" className="py-4 pl-6 ml-10">Sign up</Button>
            </div> 
            
        </div>
    )
}


export default Navbar;