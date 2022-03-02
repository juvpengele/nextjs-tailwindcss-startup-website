import Image from "next/image";
import Link from "next/link";
import Button from "../shared/Button";

function Navbar() {
    return (
        <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center 
            justify-between py-6"
        >
            <div className="flex items-center justify-between w-full">
                <Link href="/">
                    <a>
                        <Image 
                            src="/logo.svg"
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
                <Link href="/pricing"><a className="py-4 px-4 font-semibold text-gray-400">Pricing</a></Link>
                <Link href="/about-us"><a className="py-4 px-4 font-semibold text-gray-400">About us</a></Link>
                <Link href="/contact"><a className="py-4 px-4  font-semibold text-gray-400">Contact</a></Link>
                <Link href="#"><a className="py-4 px-4 text-blue-700 font-semibold">Login</a></Link>
                <Button href="#" class="py-4 px-6">Sign up</Button>
            </div>
            
        </div>
    )
}


export default Navbar;