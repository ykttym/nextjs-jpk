import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Input from '@/p_search/Input'
import History from '@/p_search/History'
import Suggest from '@/p_search/Suggest'
import Result from '@/p_search/Result'
import { getSearchResult, getSearchSuggest } from 'core/api'

const TYPES = {
  HISTORY: 'history',
  SUGGEST: 'suggest',
  RESULT: 'result',
}
export default function Search({ result, kw }) {
  const router = useRouter()
  const [contType, setContType] = useState(kw ? TYPES.RESULT : TYPES.HISTORY)
  const [loading, setLoading] = useState(false)
  const [suggestList, setSuggestList] = useState([])

  const submitSearch = (kw = '') => {
    console.log('submitSearch')
    setContType(TYPES.RESULT)
    setLoading(true)
    router.replace({
      path: 'search',
      query: {
        kw,
      },
    })
  }

  const fetchSuggest = async (kw = '') => {
    setContType(TYPES.SUGGEST)
    const res = (await getSearchSuggest(kw)) || []
    setSuggestList(res)
  }

  const showHistory = () => {
    setContType(TYPES.HISTORY)
  }

  const renderContent = () => {
    if (loading) return <div>loading...</div>
    switch (contType) {
      case TYPES.HISTORY:
        return <History submitSearch={submitSearch} data={result} />
      case TYPES.SUGGEST:
        return <Suggest submitSearch={submitSearch} data={suggestList} />
      case TYPES.RESULT:
        return <Result data={result} />
      default:
        break
    }
  }
  useEffect(() => {
    setLoading(false)
  }, [kw])

  return (
    <main>
      <h3>搜索页</h3>
      <Input
        keyword={kw}
        submitSearch={submitSearch}
        fetchSuggest={fetchSuggest}
        showHistory={showHistory}
      />
      {renderContent()}
    </main>
  )
}

export async function getServerSideProps(context) {
  const { query } = context
  const { kw = '' } = query
  const data = await getSearchResult(kw)

  // Pass data to the page via props
  return { props: { result: data, kw } }
}
