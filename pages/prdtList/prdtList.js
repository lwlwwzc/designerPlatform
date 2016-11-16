var util = require('../../utils/util.js')

Page({
  data: {
    // text:"这是一个页面"
    typeId: null,
    title: 'hello world',
    tabViewList: [
      {
        tabId: 0,
        title: '最新'
      },
      {
        tabId: 1,
        title: '热门'
      }
    ],
    prdtList: [
      {
        pid: 0,
        name: "回家防静电防静电反对反对户籍发动机号",
        imageUrl: "http://imgb.mumayi.com/android/wallpaper/2012/02/01/sl_600_2012020105355767821253.jpg",
        author: "李文磊",
        price: 1000000
      },
      {
        pid: 1,
        name: "夏天系列1",
        imageUrl: "http://imgb.mumayi.com/android/wallpaper/2012/02/01/sl_600_2012020105355767821253.jpg",
        author: "李文磊",
        price: 1000000
      },
      {
        pid: 2,
        name: "秋天系列1",
        imageUrl: "http://imgb.mumayi.com/android/wallpaper/2012/02/01/sl_600_2012020105355767821253.jpg",
        author: "李文磊",
        price: 1000000
      },
      {
        pid: 3,
        name: "冬天系列1",
        imageUrl: "http://imgb.mumayi.com/android/wallpaper/2012/02/01/sl_600_2012020105355767821253.jpg",
        author: "李文磊",
        price: 1000000
      },
      {
        pid: 4,
        name: "动漫系列1",
        imageUrl: "http://imgb.mumayi.com/android/wallpaper/2012/02/01/sl_600_2012020105355767821253.jpg",
        author: "李文磊",
        price: 1000000
      },
      {
        pid: 5,
        name: "复古系列1",
        imageUrl: "http://imgb.mumayi.com/android/wallpaper/2012/02/01/sl_600_2012020105355767821253.jpg",
        author: "李文磊",
        price: 1000000
      }
    ],
    curTabIndex: 0
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

    this.data.typeId = options.id

    wx.setNavigationBarTitle({
      title: options.name
    })

    this.setData({
      title: options.title
    })

  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },

  btnTapped: function (event) {
    console.log("按钮点击");

    wx.navigateTo({
      url: "../prdtDetail/prdtDetail?title=detail"
    })
  },
  tabItemTap: function (event) {
    var index = event.currentTarget.id
    this.setData({
      curTabIndex: index
    })
  },
  itemTap: function (event) {

    var pid = event.currentTarget.dataset.pid
    var name = event.currentTarget.dataset.name
    wx.navigateTo({
      url: '../prdtDetail/prdtDetail?pid='+pid+'&name='+name
    })
  }
})