import Head from 'next/head'
import HomeHead from '@/p_home/HomeHead'
import Talk from '@/p_home/Talk'
import Recommend from '@/p_home/Recommend'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>精品课首页</title>
      </Head>
      <main>
        <HomeHead />
        <Talk />
        <Recommend />
      </main>
    </div>
  )
}
