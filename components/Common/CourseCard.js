import { memo } from 'react'
import Link from 'next/link'
import s from './CourseCard.module.css'

const CourseCard = ({ data = {} }) => {
  const { courseTitle = '', id = '' } = data
  return (
    <Link href="/course/detail/[id]" as={`/course/detail/${id}`}>
      <a className={`${s.card} border-b-1px`}>
        <p>{courseTitle}</p>
      </a>
    </Link>
  )
}

export default memo(CourseCard)
