import Head from 'next/head'
import HomeHead from '@/p_home/HomeHead'
import Recommend from '@/p_home/Recommend'
import Talk from '@/p_home/Talk'
import { getHome } from 'core/api'

export default function Home({ home = {} }) {
  const { banner } = home

  return (
    <div>
      <Head>
        <title>精品课首页</title>
      </Head>
      <main>
        <HomeHead banner={banner} />
        <Talk />
        <Recommend />
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const data = await getHome()

  return { props: { home: data } }
}
