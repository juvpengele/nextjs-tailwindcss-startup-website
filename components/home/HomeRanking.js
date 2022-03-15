import StarRanking from "../shared/StarRanking"

const rankings = [
    {
        title: 'Very Good Protection',
        description: 'Used for many years. Never have any problem in my computer.',
        rate: 3,
        author: 'Ugur D.'
    },
    {
        title: 'Complete protection that doesn\'t slow you down',
        description: 'The reason I initially first went with Kaspersky a few years ago was that I heard it was not very heavy on my resources.',
        rate: 5,
        author: 'Ugur D.'
    },
    {
        title: 'Protection for all the family',
        description: 'A great product for all, easy to use and gives you all round protection. I like the easy way it carries out updates and the fixing of errors',
        rate: 4,
        author: 'Ugur D.'
    }
]


export default function HomeRanking() {
    return (
        <section className="my-20">
            <h3 className="font-bold text-3xl text-center">Happy User</h3>
            <div className="my-20 flex flex-wrap items-center  lg:-mx-4">
                {
                    rankings.map((ranking) => (
                        <div className="w-full md:w-1/2 md:px-2 xl:w-1/3 px-0 lg:px-4  " 
                            key={ranking.title}
                        >
                            <div className="shadow-xl px-12 py-16 rounded-lg flex flex-col justify-center items-center">
                                <span className="text-2xl font-semibold text-center">
                                    { ranking.title }
                                </span>
                                <p className="text-gray-400 py-10 text-center">
                                    { ranking.description }
                                </p>
                                <StarRanking rate={ranking.rate} />
                                <span className="py-5">by {ranking.author}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}