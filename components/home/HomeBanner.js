import Image from "next/image";
import Button from "../shared/Button";

function HomeBanner() {
    return (
        <section className="py-10 flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2">
                <div className="w-full lg:w-4/5">
                    <h1 className="text-5xl lg:text-6xl font-bold py-4">
                        Keeping It All Together
                    </h1>
                    <p className="py-10 text-gray-400">
                        Enjoy special advertising offers from Google, Microsoft Advertising/Yahoo, 
                        and other leading sites to help grow your business, - Start Today.
                    </p>
                    <div className="flex py-4 items-center">
                        <Button href="#" size="lg" className="mr-4">Try it for free > </Button>
                        <small className="text-gray-400">
                            * No credit card required
                        </small>
                    </div>
                </div>
               
            </div>
            <div className="hidden lg:flex lg:justify-end lg:w-1/2 ">
                <Image 
                    src="/assets/img/home-banner.png" 
                    alt="Home banner"
                    width="500"
                    height="500"
                />
            </div>
        </section>
    )
}

export default HomeBanner;