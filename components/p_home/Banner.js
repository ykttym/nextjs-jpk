import Link from 'next/link'
import ReactSlick from 'react-slick'
import s from './Banner.module.css'

const Banner = ({ data = [] }) => {
  const isSwiperable = data && data.length
  const settings = {
    arrows: false,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: isSwiperable,
    infinite: isSwiperable,
    swipe: isSwiperable,
    dots: isSwiperable,
    dotsClass: 'banner-dots',
    className: 'home-banners',
  }
  return (
    <section className={s.wrap}>
      {/* 轮播 */}
      <ReactSlick {...settings}>
        {data.map((item, index) => (
          // 跳转链接
          <Link key={index} href="/course/detail/[id]" as={`course/detail/${item.courseId}`}>
            {/* banner图片 */}
            <img src={item.img} key={index} alt={item.title} className={s.slide} />
          </Link>
        ))}
      </ReactSlick>
      {/* 半透明渐变蒙层 */}
      <div className={s.mask}></div>
    </section>
  )
}

export default Banner
