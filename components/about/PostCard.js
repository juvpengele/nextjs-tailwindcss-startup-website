import Image from "next/image"

export default function PostCard({ post }) {
    return (
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 lg:px-4 xl:px-6">
            <div  className="
                flex flex-col my-10 px-6 h-[36rem] shadow-lg rounded-lg" 
            >
                <div className="flex-1 flex flex-col ">
                    <div className="flex justify-center mb-6">
                        <Image
                            src={post.cover}
                            width={350}
                            height={350}
                            alt={post.title}
                            className="w-full"
                        />
                    </div>
                    
                    <h4 className="text-3xl font-semibold mt-4">{ post.title }</h4>
                    <p className="text-gray-500">
                        { post.content }
                    </p>
                </div>
                <small className="text-gray-400 pb-4">{ post.date }</small>
            </div>
        </div>
        
    )
}