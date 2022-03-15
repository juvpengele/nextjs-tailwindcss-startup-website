import Button from "../shared/Button";

export default function HomeCta() { 
    return (
        <div className="py-28 px-6 my-10 flex flex-col items-center justify-center bg-blue-600 rounded-xl text-white">
            <h4 className="w-full md:w-1/3 lg:w-1/4 text-3xl text-center font-bold leading-normal">Online Security For You & Your Family</h4>
            <p className="my-10 w-full md:w-2/3 text-center">
                With our advanced technology, you can enjoy a 
                safe and private Internet experience without compromising 
                the performance of your computer and mobile devices. 
            </p>
            <Button href="#" variant="white" size="lg">Try for free</Button>
        </div>
    )
}