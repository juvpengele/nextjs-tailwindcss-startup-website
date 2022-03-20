import { IoCheckmarkSharp } from 'react-icons/io5'
import Button from './Button'

const prices = [
    {
        amount: '29',
        name: 'Standard',
        description: 'Essential antivirus projected for Windows PCs',
        items: [
            'Only Windows PCs', 'Two PC protection'
        ]
    },
    {
        amount: '44',
        name: 'Popular',
        description: 'Advanced antivirus & privacy protection for PC, Mac & Mobile',
        items: [
            'Windows PCs & Mac', 'Three PC protection', 'Smart & fast VPN',
            'WebCam Protection', 'Private Browsing'
        ]
    },
    {
        amount: '71',
        name: 'Premium Suite',
        description: 'Access to all our security apps for PC, Mac, iOS & Android',
        items: [
            'Real-Time Antivirus', 'Anti- Phishing', 'Smart & fast VPN',
            'WebCam Protection', 'Payment Protection', 'Adult Content Blocker',
            'File Protection'
        ]
    },

]


export default function Price() {

    const renderItems = (items) => (
        <ul>
            {
                items.map((item) => (
                    <li key={item} className="flex items-center py-2">
                        <span className="bg-green-500 text-white rounded-full
                            p-1 text-lg mr-2
                        ">
                            <IoCheckmarkSharp />
                        </span>
                        <span>
                            {item}
                        </span>
                    </li>
                ))
            }
        </ul>
    )

    return (
        <section className="py-16">
            <div className="text-center">
                <h2 className="text-4xl py-6 font-bold">Get complete peace of mind online</h2>
                <p className="text-gray-400">
                    Shop, stream, bank and browse the web securely with
                    industry-leading protection for all your devices.
                </p>
            </div>
            <div>
                <div className="flex flex-wrap mx-0 md:-mx-2 lg:-mx-6">
                    {
                        prices.map(({ amount, description, items, name}) => (
                            <div key={name} className="
                                w-full px-0 py-6 my-6 md:w-1/2 md:px-2 xl:w-1/3 lg:px-6 "
                            >
                                <div className="
                                    border border-4 border-gray-200 rounded-lg 
                                    flex flex-col items-center px-4 py-8 lg:px-10
                                ">
                                    <div className="py-8">
                                        <span className="text-2xl font-bold">{`$${amount}`}</span>
                                        <span className="text-gray-500 font-semibold">/year</span>
                                    </div>
                                    <span className="text-3xl font-semibold text-blue-700">{`${name}`}</span>
                                    <p className="text-gray-500 text-center py-6">{`${description}`}</p>
                                    
                                    {  renderItems(items) }

                                    <Button href="#" size='lg' className='my-6 w-full flex justify-center'>Buy now</Button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}