import { memo } from 'react'
import Link from 'next/link'
import s from './CourseCard.module.css'

const CourseCard = ({ data = {} }) => {
  const { courseTitle = '', id = '', categoryName = '' } = data
  return (
    <Link href="/course/detail/[id]" as={`/course/detail/${id}`}>
      <a className={`${s.card} border-b-1px`}>
        <h5>
          <span className={s.categoryTag}>{categoryName}</span>
          <span className={s.title}>{courseTitle}</span>
        </h5>
      </a>
    </Link>
  )
}

export default memo(CourseCard)
