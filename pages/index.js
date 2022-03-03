import Head from 'next/head'
import Link from 'next/link'
import HomeBanner from '../components/home/HomeBanner'
import HomeCompanies from '../components/home/HomeCompanies'

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <HomeCompanies />
    </div>
  )
}
 