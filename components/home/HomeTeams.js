import Button from "../shared/Button";
import Image from 'next/image'

import { IoChevronForward } from 'react-icons/io5'

const teamImages = [
    'team1.png', 'team2.png', 'team3.png', 'team4.png'
]

export default function HomeTeams() {
    return (
        <div className="py-20 flex flex-wrap">
            <div className="w-full lg:w-1/2 my-6 px-0 ">
                <div className="w-full lg:w-4/5 pt-0 lg:pt-16">
                    <h3 className="text-3xl lg:text-4xl font-semibold">Global leader in cybersecurity</h3>
                    <p className="my-10 text-gray-400">
                        The company’s comprehensive security portfolio includes leading 
                        endpoint protection and a number of specialized security solutions 
                        and services to fight sophisticated and evolving digital threats. 
                        Over 400 million users are protected by Hugi technologies and 
                        we help 250,000 corporate clients protect what matters most to them.
                    </p>
                    <Button href="/about" size="lg">
                        Learn more <IoChevronForward />
                    </Button>
                </div>
                
            </div>
            <div className="w-full lg:w-1/2  my-6">
                <div className="flex flex-wrap">
                {
                    teamImages.map((image) => (
                        <div key={image} className="w-1/2 my-2 p-2">
                            <Image 
                                src={`/assets/img/team/${image}`}
                                width={400}
                                height={320}
                                alt="Team Image"
                            />
                        </div>
                    ))
                }
                </div>
                
            </div>
        </div>
    )
}