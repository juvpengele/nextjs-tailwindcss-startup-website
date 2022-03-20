import Image from "next/image"
import PostCard from "./PostCard"

const posts = [
    {
        cover: '/assets/img/posts/post-1.png',
        title: 'Awards',
        content: 'See product evaluations from third-party analysts.',
        date: '10 January 2022'
    },
    {
        cover: '/assets/img/posts/post-2.png',
        title: 'Company',
        content: 'Access the latest press releases and other resources for the media.',
        date: '13 January 2022'
    },
    {
        cover: '/assets/img/posts/post-3.png',
        title: 'Works',
        content: 'Inclusion at McAfee is about the power of working together and creating a culture where all voices are valued.',
        date: '8 September, 2022'
    }

]

export default function AboutPosts() {
    return (
        <>
            <h2 className="text-center font-bold text-4xl mb-8">What&apos;s going on at Hugi ?</h2>
            <div className="flex flex-wrap justify-between -mx-2 lg:-mx-4 xl:-mx-6">
                { posts.map(post => <PostCard post={post} key={post.title} />)}
            </div>
        </>
    )
}