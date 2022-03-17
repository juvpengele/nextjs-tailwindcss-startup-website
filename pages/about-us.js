import Head from 'next/head'
import Image from 'next/image'
import AboutBanner from '../components/about/AboutBanner'
import AboutPosts from '../components/about/AboutPosts'
import Button from '../components/shared/Button'

export default function AboutUs() {
    return (
        <>
            <Head>
                <title>About us | Hugi</title>
            </Head>
            <AboutBanner />
            <AboutPosts />
        </>
    )
}