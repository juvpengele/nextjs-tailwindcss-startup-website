import Head from 'next/head'
import HomeBanner from '../components/home/HomeBanner'
import HomeCompanies from '../components/home/HomeCompanies'
import HomeCta from '../components/home/HomeCta'
import HomeRanking from '../components/home/HomeRanking'
import HomeTeams from '../components/home/HomeTeams'
import Price from '../components/shared/Price'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Hugi</title>
      </Head>
      <HomeBanner />
      <HomeCompanies />
      <Price />  
      <HomeRanking />
      <HomeTeams />
      <HomeCta />
    </div>
  )
}
 