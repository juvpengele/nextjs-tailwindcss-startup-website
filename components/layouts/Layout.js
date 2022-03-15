import Footer from "./Footer"
import Navbar from "./Navbar"

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <div className="container px-4">
                { children }
            </div>
            <Footer />
        </>
    )
}