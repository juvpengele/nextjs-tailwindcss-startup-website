import Head from 'next/head'
import Link from 'next/link'

export default function Contact() {
  return (
    <div>
      <h1 className="text-5xl">
        Contact
      </h1>
      <Link href="/"><a>Home</a></Link>
    </div>
  )
}
