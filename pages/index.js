import { useEffect, useState } from 'react'
import Head from 'next/head'
import HomeHead from '@/p_home/HomeHead'
import Recommend from '@/p_home/Recommend'
import Talk from '@/p_home/Talk'
import { getHome, getRecommend } from 'core/api'

export default function Home({ home = {} }) {
  const { banner } = home
  const [recommendList, setRecommendList] = useState([])
  useEffect(() => {
    const fetchRecommend = async () => {
      const list = await getRecommend()
      setRecommendList(list)
    }
    fetchRecommend()
  }, [])
  return (
    <div className="container">
      <Head>
        <title>精品课首页</title>
      </Head>
      <main>
        <HomeHead banner={banner} />
        <Talk />
        <Recommend data={recommendList} />
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const data = await getHome()

  return { props: { home: data } }
}
