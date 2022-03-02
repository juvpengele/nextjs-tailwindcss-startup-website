import Image from "next/image";
import Link from "next/link";
import Button from "../shared/Button";

function Navbar() {
    return (
        <div className="container mx-auto flex items-center justify-between py-6">
            <Link href="/">
                <a>
                    <img 
                        src="/logo.svg"
                        height={70} 
                        width={70}
                        alt="Logo"
                    />
                </a>
            </Link>

            <div className="flex items-center">
                <Link href="/pricing"><a className="px-4 font-semibold text-gray-400">Pricing</a></Link>
                <Link href="/about-us"><a className="px-6 font-semibold text-gray-400">About us</a></Link>
                <Link href="/contact"><a className="px-6  font-semibold text-gray-400">Contact</a></Link>
                <Link href="#"><a className="px-6 text-blue-700 font-semibold">Login</a></Link>
                <Button href="#" class="px-6">Sign up</Button>
            </div>
        </div>
    )
}


export default Navbar;