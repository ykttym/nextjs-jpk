import Document, { Html, Head, Main, NextScript } from 'next/document'

// 只在服务端渲染
class MyDocument extends Document {
  // 数据预请求
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* 禁止iphone点击数字自动拨号 */}
          <meta name="format-detection" content="telephone=no"></meta>
          <meta httpEquiv="x-ua-compatible" content="ie=edge"></meta>
          {/* 网站描述信息 */}
          <meta
            name="keywords"
            content="有道,有道精品课,网易,网易有道,youdao,网易公开课,作业,学习,网课,教育,课堂,课程,名师,听课,辅导,英语,数学,语文,大学,初中,高中,小学,考研,学英语,学习辅导,学习软件,空中课堂,直播课,学英语软件,背单词,口语,英语音标,四级,六级,四六级,TED英语演讲,英语单词,英语语法,英语四级,英语4级,托福,雅思,逻辑英语,英语作文,英语讲课,英语课程,大学生mooc,大学英语四级,大学资源网,考研核心词速记,考神有道,考试点考研,英语六级词汇,英语四级作文,英语直播课,英语笔译,英语网课,英语考试,英语考试题,英语语法时态介词,英语语法软件,英语课,英语课文,英语题,雅思课程,零基础英语"></meta>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          {/* 内容容器 */}
          <Main />
          {/* 插入脚本 */}
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
