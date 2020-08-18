import { memo } from 'react'

const CourseCard = ({ data = {} }) => {
  const { courseTitle = '' } = data
  return (
    <div>
      <p>{courseTitle}</p>
    </div>
  )
}

export default memo(CourseCard)
