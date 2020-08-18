import { memo } from 'react'
import CourseCard from '@/Common/CourseCard'

const Result = ({ data = [] }) => {
  return (
    <div>
      Result
      {data.map((item) => (
        <CourseCard data={item} key={item.id} />
      ))}
    </div>
  )
}
export default memo(Result)
