import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className="text-5xl">
        Hello World
      </h1>
      <Link href="/contact"><a>Contact</a></Link>
    </div>
      
  )
}
