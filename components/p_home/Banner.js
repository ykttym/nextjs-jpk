import { useState } from 'react'
import Link from 'next/link'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay, virtualize } from 'react-swipeable-views-utils'
import { mod } from 'react-swipeable-views-core'
import s from './Banner.module.css'

const AutoPlaySwipeableViews = virtualize(autoPlay(SwipeableViews))

const Banner = ({ data }) => {
  const [idx, setIdx] = useState(0)
  const slideRenderer = ({ index, key }) => {
    const item = data[mod(index, data.length)]
    return (
      <Link key={key} href="/course/detail/[id]" as={`course/detail/${item.courseId}`}>
        <img src={item.img} alt={item.title} className={s.slide} />
      </Link>
    )
  }
  return (
    <section className={s.wrap}>
      <AutoPlaySwipeableViews
        index={idx}
        onChangeIndex={(i) => setIdx(i)}
        slideRenderer={slideRenderer}
      />
      {/* todo slide dot */}
      <div className={s.mask}></div>
    </section>
  )
}

export default Banner
