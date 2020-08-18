import { useRef, useState, memo } from 'react'

const Input = ({ keyword = '', submitSearch, fetchSuggest, showHistory }) => {
  const inputEl = useRef(null)
  const [val, setVal] = useState(keyword || '')

  const searchSubmit = (e) => {
    if (e.keyCode !== 13 || !inputEl?.current) return
    const event = e || window.event
    event.preventDefault()
    const filteredVal = inputEl.current.value.trim()
    if (!filteredVal) {
      setVal(filteredVal)
    }
    submitSearch(filteredVal) // 提交查询字段
    inputEl.current.blur() // 收起键盘
    return false
  }

  const handleChange = () => {
    const searchVal = inputEl.current.value
    setVal(searchVal)
    const trimVal = searchVal.trim()
    if (!trimVal) {
      showHistory()
      return
    }
    if (val !== trimVal) {
      fetchSuggest(trimVal)
    }
  }

  return (
    <div>
      <input
        type="search"
        placeholder={' 输入搜索内容'}
        value={val}
        onChange={handleChange}
        ref={inputEl}
        onKeyUp={searchSubmit}
        onClick={() => {
          inputEl.current.focus()
        }}
      />
      {/* 当输入框不为空的时候展示自定义清空按钮*/}
    </div>
  )
}

export default memo(Input)
