import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'


export default function Footer() {
    return (
        <footer className="py-14 container px-4">
            <div className="flex justify-between pb-24  border-b-2 border-gray-100">
                <div className="flex flex-wrap flex-1">
                    <div className="w-full md:w-1/4">
                        <span className="mb-8 pt-4 inline-flex text-black text-xl font-semibold">Company</span>
                        <ul>
                            <li className="text-gray-400 ">About us</li>
                            <li className="text-gray-400 ">Partners</li>
                            <li className="text-gray-400 ">Blog</li>
                            <li className="text-gray-400 ">Careers</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4">
                        <h5  className="mb-8 pt-4 inline-flex text-black text-xl font-semibold">Contact</h5>
                        <ul>
                            <li className="text-gray-400 ">Terms of Use</li>
                            <li className="text-gray-400 ">Privacy Policy</li>
                            <li className="text-gray-400 ">FAQ</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <select className="px-4 py-2 rounded-lg">
                        <option>Global</option>
                        <option>Local</option>
                    </select>
                </div>
            </div>
            <div className="py-10 flex flex-wrap justify-between">
                <span className="text-gray-400">&copy; hugi.com</span>
                <div className="flex">
                    <FaFacebookF className="text-gray-300 text-2xl ml-8"/>
                    <FaTwitter className="text-gray-300 text-2xl ml-8"/>
                    <FaInstagram className="text-gray-300 text-2xl ml-8"/>
                    <FaYoutube className="text-gray-300 text-2xl ml-8"/>
                </div>
            </div>
        </footer>
    )
}