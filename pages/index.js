import Head from 'next/head'

export default function Home() {
  const SectionHeader = <header>section header</header>
  return (
    <div className="container">
      <Head>
        <title>精品课首页</title>
      </Head>
      <main>
        <h3>精品课首页</h3>
        <header>fixed seatch bar</header>
        <section>swiper banner</section>
        <section>swiper entries card</section>
        <section>open course {SectionHeader}</section>
        <section>
          recommend courses {SectionHeader} <div>coursecard List</div>
        </section>
      </main>
    </div>
  )
}
