// 首页数据
export default (req, res) => {
  res.statusCode = 200
  res.json({
    msg: 'success',
    code: '0',
    data: {
      // banner
      head: [
        {
          img: 'https://oimagea2.ydstatic.com/image?id=-5999083008346310239&product=xue',
          title: '5天用公式巧学英语',
          courseId: 301,
        },
        {
          img: 'https://oimagec6.ydstatic.com/image?id=-444283093513969375&product=xue',
          title: '3天带你摆脱“哑巴英语”',
          courseId: 302,
        },
        {
          img: 'https://oimagec2.ydstatic.com/image?id=2267101296453457615&product=xue',
          title: '雅思从迷茫到7分，备考规划三步走',
          courseId: 303,
        },
        {
          img: 'https://oimageb2.ydstatic.com/image?id=6068719285291862311&product=xue',
          title: '【延考必备】一节课带你吃透专八听力（不设回放）',
          courseId: 304,
        },
      ],
      // 弹窗
      popup: {
        img: 'https://oimageb1.ydstatic.com/image?id=3322330763915048199&product=xue',
        courseId: 305,
      },
      // 公开课
      talk: {
        recommend: [
          {
            img: 'https://oimageb6.ydstatic.com/image?id=6000293226615972784&product=xue',
            title: '教你用中文思维学韩语',
            type: 'left',
            courseId: 305,
          },
          {
            img: 'https://oimagea1.ydstatic.com/image?id=-3805219868153477223&product=xue',
            title: '比动漫有趣的日语入门课',
            type: 'rightTop',
            courseId: 307,
          },
          {
            img: 'https://oimageb8.ydstatic.com/image?id=-1357191060380425834&product=xue',
            title: '教你用中文思维学韩语',
            type: 'rightBottom',
            courseId: 308,
          },
        ],
        card: [
          {
            img: 'https://oimagea6.ydstatic.com/image?id=-7777456073272405887&product=xue',
            title: '【备战9月 抢分计划】四六级听力涨分必备技巧指导（不设回放）',
            type: 'talk',
            teacher: {
              img: 'https://oimagea7.ydstatic.com/image?id=-2558150718497476897&product=xue',
              title: '欧阳萍',
            },
            courseId: 309,
          },
          {
            img: 'https://oimagec6.ydstatic.com/image?id=9025518762184362382&product=xue',
            title: '【新高一】高中物理运动学问题初探（第九期）',
            type: 'talk',
            teacher: { title: '杨超' },
            courseId: 310,
          },
          {
            img: 'https://oimageb4.ydstatic.com/image?id=7978814422334776821&product=xue',
            title: '【升初三】数学几何快速提升攻略',
            type: 'talk',
            teacher: { title: '孟亚飞' },
            courseId: 311,
          },
          {
            img: 'https://oimagea7.ydstatic.com/image?id=-4264603876335757806&product=xue',
            title: '雅思从迷茫到7分，备考规划三步走',
            type: 'talk',
            teacher: { title: '丁爽' },
            courseId: 312,
          },
        ],
      },
      // 一级分类入口
      fixedEntries: [
        {
          darkImg: 'https://oimageb7.ydstatic.com/image?id=-1389662568494753458&product=xue',
          img: 'https://oimagea1.ydstatic.com/image?id=-6073916749092622965&product=xue',
          id: 1001,
          title: '小学',
        },
        {
          darkImg: 'https://oimagec3.ydstatic.com/image?id=4367202920833094466&product=xue',
          img: 'https://oimageb3.ydstatic.com/image?id=3885851698591656569&product=xue',
          id: 1002,
          title: '初中',
        },
        {
          darkImg: 'https://oimagec7.ydstatic.com/image?id=-6977267071052441088&product=xue',
          img: 'https://oimageb6.ydstatic.com/image?id=-2755338733507215894&product=xue',
          id: 1003,
          title: '高中',
        },
        {
          darkImg: 'https://oimagec7.ydstatic.com/image?id=-323167426781289472&product=xue',
          img: 'https://oimageb5.ydstatic.com/image?id=-2826789575120848086&product=xue',
          id: 1004,
          title: '四六级',
        },
        {
          darkImg: 'https://oimagea8.ydstatic.com/image?id=-285251908818235770&product=xue',
          img: 'https://oimagec4.ydstatic.com/image?id=-3262931994811667748&product=xue',
          id: 1005,
          title: '实用英语',
        },
        {
          darkImg: 'https://oimagea4.ydstatic.com/image?id=-7185855184522551798&product=xue',
          img: 'https://oimagec8.ydstatic.com/image?id=-328616392399181031&product=xue',
          id: 1006,
          title: '考研',
        },
        {
          darkImg: 'https://oimagec7.ydstatic.com/image?id=3789640536126569486&product=xue',
          img: 'https://oimageb6.ydstatic.com/image?id=1428035909329838403&product=xue',
          id: 1007,
          title: '兴趣技能',
        },
        {
          darkImg: 'https://oimagea7.ydstatic.com/image?id=7707476084751227511&product=xue',
          img: 'https://oimagea2.ydstatic.com/image?id=2611813809776840444&product=xue',
          id: 1008,
          title: '逻辑英语',
        },
        {
          darkImg: 'https://oimagea3.ydstatic.com/image?id=9162433679524700817&product=xue',
          img: 'https://oimagea2.ydstatic.com/image?id=2520806025655908611&product=xue',
          id: 1009,
          title: '专四专八',
        },
        {
          darkImg: 'https://oimageb7.ydstatic.com/image?id=4511219425908623972&product=xue',
          img: 'https://oimagea1.ydstatic.com/image?id=5426777805974361888&product=xue',
          id: 1010,
          title: '教师资格',
        },
        {
          darkImg: 'https://oimagea2.ydstatic.com/image?id=-8063811166866575964&product=xue',
          img: 'https://oimagea8.ydstatic.com/image?id=-4602679238033946623&product=xue',
          id: 1011,
          title: '雅思托福',
        },
        {
          darkImg: 'https://oimagec1.ydstatic.com/image?id=-5497744888700236202&product=xue',
          img: 'https://oimageb4.ydstatic.com/image?id=2726457939896858585&product=xue',
          id: 1012,
          title: '编程开发',
        },
      ],
    },
  })
}
