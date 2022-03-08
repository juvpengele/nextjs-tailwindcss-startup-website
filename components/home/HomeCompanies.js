import Image from "next/image"


const companies = [
    { logo: 'google.png', name: 'Google' },
    { logo: 'yahoo.png', name: 'Yahoo'},
    { logo: 'microsoft.png', name: 'Microsoft' },
    { logo: 'huawei.png', name: 'Huawei'}
]


export default function HomeCompanies() {
    return (
        <section className="py-16 text-center">
            <span className="text-gray-400 ">
                Thousands of teams worldwide are using Hugi
            </span>
            <div className="flex flex-wrap my-6">
                {
                    companies.map((company) => (
                        <div className="w-1/2 lg:w-1/4 relative my-10 flex
                            justify-center
                        " key={company.name}>
                            <Image 
                                src={`/assets/img/companies/${company.logo}`}
                                alt={`${company.name} Logo`}
                                width={200}
                                height={50}
                                objectFit="contain"
                            />
                        </div>
                    ))
                }
                
            </div>
        </section>
    )
}