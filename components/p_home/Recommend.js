import SectionHeader from './SectionHeader'
import CourseCard from '@/Common/CourseCard'

export default function Recommend() {
  const data = []
  return (
    <div>
      <SectionHeader />
      Recommend
      {data.map((item) => (
        <CourseCard key={item.id} />
      ))}
    </div>
  )
}
