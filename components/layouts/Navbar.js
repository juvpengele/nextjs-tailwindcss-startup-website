import Image from "next/image";
import Link from "next/link";
import Button from "../shared/Button";
import NavLink from "../shared/NavLink";

function Navbar() {
    return (
        <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center 
            justify-between py-6 px-4"
        >
            <div className="flex items-center justify-between w-full">
                <Link href="/">
                    <a>
                        <Image 
                            src="/assets/img/logo.svg"
                            height={70} 
                            width={70}
                            alt="Logo"
                        />
                    </a>
                </Link>
                <div className="flex lg:hidden">
                    <Link href="#"><a className="px-6 text-blue-700 font-semibold">Menu</a></Link>
                </div>
            </div>
            
            <div className="flex flex-col lg:flex-row w-full items-center lg:justify-end">
                <Link href="/pricing" passHref>
                    <NavLink>
                        Pricing
                    </NavLink>
                </Link>
                <Link href="/about-us" passHref><NavLink>About us</NavLink></Link>
                <Link href="/contact" passHref><NavLink>Contact</NavLink></Link>
                <Link href="/#" passHref><NavLink>Login</NavLink></Link>
                <Button href="#" className="py-4 pl-6 ml-10">Sign up</Button>
            </div> 
            
        </div>
    )
}


export default Navbar;