import Head from 'next/head'
import Link from 'next/link'
import HomeBanner from '../components/home/HomeBanner'
import HomeCompanies from '../components/home/HomeCompanies'
import HomeRanking from '../components/home/HomeRanking'
import Price from '../components/shared/Price'

export default function Home() {
  return (
    <div>
      <HomeBanner />
      <HomeCompanies />
      <Price />  
      <HomeRanking />
    </div>
  )
}
 