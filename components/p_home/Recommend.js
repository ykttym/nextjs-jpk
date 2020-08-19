import SectionHeader from './SectionHeader'
import CourseCard from '@/Common/CourseCard'
import s from './Recommend.module.css'

export default function Recommend({ data = [] }) {
  if (!data || !data.length) return null

  return (
    <section>
      <SectionHeader title="课程精选" subTitle="Course selection" />
      <div className={s.list}>
        {data.map((item) => (
          <CourseCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  )
}
