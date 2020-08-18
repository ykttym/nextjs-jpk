import { memo } from 'react'

const Suggest = ({ data = [] }) => {
  return (
    <ul>
      Suggest
      {data.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default memo(Suggest)
