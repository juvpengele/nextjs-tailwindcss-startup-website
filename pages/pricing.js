import Price from "../components/shared/Price";
import Button from "../components/shared/Button";
import Image from "next/image";
import Head from 'next/head'

export default function Pricing() {
    return (
        <>
            <Head>
                <title>Pricing | Hugi</title>
            </Head>
                <div className="py-10 flex flex-wrap items-center justify-center">
                <div className="w-full lg:w-1/2">
                    <Button href="#">
                        Back to school - up to %40 off
                    </Button>
                    <h1 className="py-6 text-4xl lg:text-5xl font-bold w-full lg:w-4/5">Online Security For You</h1>
                    <p className="text-gray-400">
                        With our advanced technology, you can enjoy a safe and
                        private Internet experience without compromising the performance 
                        of your computer and mobile devices.
                    </p>
                </div>
                <div className="w-full py-10 flex justify-center lg:justify-end lg:w-1/2 ">
                    <Image
                        src="/assets/img/pricing-banner.png"
                        width={500}
                        height={500}
                        alt="Pricing Banner"
                    />
                </div>
            </div>
            <Price />
            <div>
                <h1 className="text-4xl font-bold w-full lg:text-5xl lg:w-1/2">Not sure which solution is best for you?</h1>
                <div className="flex flex-wrap">
                    <div className="py-4 w-full lg:w-1/2">
                        <hr className="my-6 w-1/3 h-0.5 bg-gray-400 "/>
                        <p className="py-6 text-gray-400 w-full lg:w-2/3">
                            Don’t worry, we can help match you to your 
                            perfect security solution in just 30 seconds.
                        </p>
                        <Button href="/contact" size="lg">Help me choose</Button>
                    </div>
                    <div className="w-full py-4 flex justify-center lg:w-1/2 lg:justify-end">
                        <Image 
                            src="/assets/img/pricing-advice.png"
                            width={500}
                            height={500}
                            alt="Price: Advice to customers"
                        />
                    </div>
                </div>
                
            </div>
        </>
        
    )
}