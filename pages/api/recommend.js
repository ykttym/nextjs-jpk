// 首页推荐课程
export default (req, res) => {
  res.statusCode = 200
  res.json({
    code: '0',
    msg: 'success',
    data: [
      // 课程信息
      {
        // 课时
        lessonNum: 101.5,
        // 教师
        teacherList: [
          {
            // 头像
            imgUrl: 'https://oimagea3.ydstatic.com/image?id=-7270976713299270557&product=bisheng',
            // 名字
            name: '建昆',
          },
          {
            imgUrl: 'https://oimagea4.ydstatic.com/image?id=-2802125652169702399&product=xue',
            name: '范范',
          },
          {
            imgUrl: 'https://oimageb7.ydstatic.com/image?id=-2161111586253547147&product=bisheng',
            name: '曲根',
          },
          {
            imgUrl: 'https://oimagea7.ydstatic.com/image?id=2650850996108594920&product=bisheng',
            name: '王菲',
          },
          {
            imgUrl: 'https://oimageb5.ydstatic.com/image?id=6334190035750490062&product=bisheng',
            name: '武峰',
          },
        ],
        // 分类
        categoryName: '专四专八',
        // 标题
        courseTitle: '【适用20备考】专八全程班（领券下单只需1299元！）',
        // 课程id
        id: 100,
        // 促销类型 0: 没有促销， 1: 有促销
        saleType: 0,
        // 已售数量
        saleNum: 394,
        // 原价
        price: 2199,
        // 开课时间
        courseTime: '随报随学',
      },
      {
        lessonNum: 249,
        teacherList: [
          {
            imgUrl: 'https://oimagec2.ydstatic.com/image?id=3130014395280986005&product=bisheng',
            name: '王一珉',
          },
          {
            imgUrl: 'https://oimagea4.ydstatic.com/image?id=459440544461353754&product=xue',
            name: '米鹏',
          },
          {
            imgUrl: 'https://oimagec3.ydstatic.com/image?id=1405888740759004487&product=xue',
            name: '刘亚男',
          },
        ],
        categoryName: '考研',
        courseTitle: '2022考研政治抢跑班（加微信领优惠：YDKS111）',
        id: 101,
        saleType: 0,
        saleNum: 422,
        price: 4999,
        courseTime: '2020-01-09 19:00:00',
      },
      {
        lessonNum: 36.5,
        teacherList: [
          {
            imgUrl: 'https://oimagea7.ydstatic.com/image?id=2650850996108594920&product=bisheng',
            name: '王菲',
          },
          {
            imgUrl: 'https://oimagea4.ydstatic.com/image?id=6108565707352354782&product=xue',
            name: '吴敏',
          },
        ],
        categoryName: '四六级',
        courseTitle: '王菲语法长难句班·第17季（本季新增写译课+精读课）',
        id: 102,
        // 促销开始时间
        saleStartTime: 1595822400000,
        // 有促销
        saleType: 2,
        // 促销结束时间
        saleEndTime: 1598587200000,
        // 原价
        price: 699,
        // 促销价格
        salePrice: 599,
        courseTime: '2020-07-27 19:30',
      },
      {
        lessonNum: 112,
        teacherList: [
          {
            imgUrl: 'https://oimageb7.ydstatic.com/image?id=-2161111586253547147&product=bisheng',
            name: '曲根',
          },
          {
            imgUrl: 'https://oimagea7.ydstatic.com/image?id=2650850996108594920&product=bisheng',
            name: '王菲',
          },
          {
            imgUrl: 'https://oimagea5.ydstatic.com/image?id=-3886508646568186875&product=xue',
            name: '欧阳萍',
          },
          {
            imgUrl: 'https://oimageb7.ydstatic.com/image?id=-9079479997232600940&product=bisheng',
            name: '陈曲',
          },
          {
            imgUrl: 'https://oimagec2.ydstatic.com/image?id=-4743134944179927512&product=xue',
            name: '贾琨',
          },
        ],
        categoryName: '四六级',
        courseTitle: '【12月考试】四级全程班·1班（暑假抢跑，轻松备战！）',
        id: 103,
        saleStartTime: 1593872355000,
        saleType: 2,
        saleNum: 1959,
        saleEndTime: 1598371199000,
        price: 399,
        courseSaleTime: 1593792600000,
        salePrice: 299,
        courseTime: '2020-08-06 08:30',
      },
      {
        lessonNum: 112,
        teacherList: [
          {
            imgUrl: 'https://oimagea3.ydstatic.com/image?id=-7270976713299270557&product=bisheng',
            name: '建昆',
          },
          {
            imgUrl: 'https://oimagea7.ydstatic.com/image?id=2650850996108594920&product=bisheng',
            name: '王菲',
          },
          {
            imgUrl: 'https://oimageb7.ydstatic.com/image?id=-9079479997232600940&product=bisheng',
            name: '陈曲',
          },
          {
            imgUrl: 'https://oimagea4.ydstatic.com/image?id=3233438047536136095&product=xue',
            name: '玛丽',
          },
          {
            imgUrl: 'https://oimagea4.ydstatic.com/image?id=6108565707352354782&product=xue',
            name: '吴敏',
          },
        ],
        categoryName: '四六级',
        subCategories: [],
        courseTitle: '【12月考试】六级全程班·1班（暑假抢跑，轻松备战！）',
        id: 104,
        saleStartTime: 1593872355000,
        saleType: 2,
        saleNum: 778,
        saleEndTime: 1598371199000,
        price: 399,
        salePrice: 299,
        courseTime: '2020-08-06 10:30',
      },
      {
        lessonNum: 26,
        teacherList: [
          {
            imgUrl: 'https://oimagea8.ydstatic.com/image?id=6179826258874774446&product=xue',
            name: '杨亮',
          },
        ],
        // 分类
        categoryName: '实用英语',
        // 标题
        courseTitle: '杨亮讲单词·方法与实战16班',
        // 课程id
        id: 105,
        // 促销类型
        saleType: 0,
        saleNum: 100,
        price: 999,
        courseTime: '随到随学',
      },
      {
        lessonNum: 180,
        teacherList: [
          {
            imgUrl: 'https://oimagea4.ydstatic.com/image?id=459440544461353754&product=xue',
            name: '米鹏',
          },
          {
            imgUrl: 'https://oimagec2.ydstatic.com/image?id=3130014395280986005&product=bisheng',
            name: '王一珉',
          },
          {
            imgUrl: 'https://oimagec3.ydstatic.com/image?id=1405888740759004487&product=xue',
            name: '刘亚男',
          },
        ],
        categoryName: '考研',
        courseTitle: '2021考研政治领学14班',
        id: 106,
        saleType: 0,
        saleNum: 0,
        price: 4999,
        courseTime: '随到随学',
      },
      {
        lessonNum: 249,
        teacherList: [
          {
            imgUrl: 'https://oimagec2.ydstatic.com/image?id=3130014395280986005&product=bisheng',
            name: '王一珉',
          },
          {
            imgUrl: 'https://oimagea4.ydstatic.com/image?id=459440544461353754&product=xue',
            name: '米鹏',
          },
          {
            imgUrl: 'https://oimagec3.ydstatic.com/image?id=1405888740759004487&product=xue',
            name: '刘亚男',
          },
        ],
        categoryName: '考研',
        courseTitle: '2022考研政治抢跑班（加微信领优惠：YDKS111）',
        id: 107,
        saleType: 0,
        saleNum: 422,
        price: 4999,
        courseTime: '2020-01-09 19:00:00',
      },
      {
        lessonNum: 265,
        teacherList: [
          {
            imgUrl: 'https://oimageb3.ydstatic.com/image?id=-4471216327158251467&product=xue',
            name: '刘金峰',
          },
        ],
        categoryName: '考研',
        courseTitle: '2022考研数学抢跑班（加微信领优惠：YDKS111）',
        id: 108,
        saleType: 0,
        saleNum: 224,
        price: 4999,
        courseTime: '2020-01-15 19:00:00',
      },
    ],
  })
}
