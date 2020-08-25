import { PureComponent } from 'react'
import s from './LoadMore.module.css'

let scrollTimer = null

function renderCont(isLoadingMore, hasMore) {
  if (isLoadingMore) {
    return <div className={s.loadText}>正在加载...</div>
  }
  return hasMore ? (
    <div className={s.loadText}>&nbsp;</div>
  ) : (
    <div className={s.loadText}>没有更多了</div>
  )
}

class LoadMore extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isLoadingMore: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    // 消抖
    if (scrollTimer) clearTimeout(scrollTimer)
    const { onReachBottom, hasMore } = this.props
    const { isLoadingMore } = this.state
    const height = window.screen.height
    const curPos = window.scrollY
    const docLength = window.document.body.scrollHeight
    /*
     * 1. 可以加载更多
     * 2. 没有正在加载更多
     * 3. scroll触达底部
     */
    if (hasMore && !isLoadingMore && curPos + height >= docLength) {
      scrollTimer = setTimeout(() => {
        this.setState({ isLoadingMore: true })
        onReachBottom()
          .then(() => {
            this.setState({ isLoadingMore: false })
            clearTimeout(scrollTimer)
          })
          .catch((e) => {
            console.log('onReachBottom Error', e)
            this.setState({ isLoadingMore: false })
          })
      }, 300)
    }
  }

  render() {
    const { hasMore } = this.props
    const { isLoadingMore } = this.state
    return <div className={s.loadMore}>{renderCont(isLoadingMore, hasMore)}</div>
  }
}

export default LoadMore
