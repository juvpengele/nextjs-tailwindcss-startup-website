import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className="my-16 flex justify-between mx-0 xl:-mx-6">
      <div className="hidden xl:flex xl:w-1/2 px-6">
          <Image
            src="/assets/img/contact-banner.png"
            width={620}
            height={620}
            alt="Contact Us - Banner"
            
          />
      </div>
      <div className="w-full lg:w-1/2 px-0 xl:px-6">
        <h1 className="text-3xl font-bold xl:text-5xl">Contact Us</h1>
        <p className="my-2 text-gray-500">Questions, bug reports, feedback</p>

        <form className="my-10">
          <div className="my-6 flex flex-col">
            <label className="text-gray-500">Your email</label>
            <input 
              placeholder="Enter your email"
              className="border border-gray-300 rounded-md px-2 py-3"
            />
          </div>
          <div className="my-6 flex flex-col">
            <label className="text-gray-500">Tell us what you need help with:</label>
            <textarea placeholder="Enter a topic"
              className="border border-gray-300 rounded-md px-2 py-3"
              rows={10}
            ></textarea>
          </div>
          <div>
            <button className="btn btn-primary ">Send now</button>
          </div>
        </form>
      </div>
    </div>
  )
}
