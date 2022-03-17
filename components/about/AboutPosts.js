import Image from "next/image"

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
            <div>
                { posts.map(post => (
                    <div key={post.cover}>
                        <Image
                            src={post.cover}
                            width={200}
                            height={200}
                            alt={post.title}
                        />
                        <h4>{ post.title }</h4>
                        <p>
                            { post.content }
                        </p>
                        <small>{ post.date }</small>
                    </div>
                ))}
            </div>
        </>
    )
}