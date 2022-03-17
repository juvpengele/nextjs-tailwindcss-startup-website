import Button from "../shared/Button"
import Image from "next/image"


export default function AboutBanner() {
    return (
        <>
             <div className="flex flex-col py-20 lg:flex-row lg:items-center">
                <div className="py-6 w-full lg:w-1/3">
                    <h1 className="text-4xl font-bold mb-5 lg:text-5xl">About Hugi</h1>
                    <p className="text-gray-500 mb-6">
                        We free and empower consumers and families 
                        to confidently enjoy life online.
                    </p>
                    <Button href="#">Corporate Fact Sheet</Button>
                </div>
                <div className="py-6 flex justify-center w-full lg:w-2/3 lg:justify-end">
                    <Image 
                        src="/assets/img/about-banner.png"
                        width={500}
                        height={500}
                        alt="About us - Banner"
                    />
                </div>
            </div>
        </>
    )
}