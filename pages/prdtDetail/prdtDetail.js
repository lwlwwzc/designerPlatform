Page({
  data: {
    // text:"这是一个页面"
    title: null,
    pid: null,
    prdt:{
      pid:1,
      imageList:[
        'http://pic54.nipic.com/file/20141202/432252_022410485001_2.jpg',
        'http://img1.imgtn.bdimg.com/it/u=637467956,3257203163&fm=21&gp=0.jpg',
        'http://img1.imgtn.bdimg.com/it/u=3912426461,4180125672&fm=21&gp=0.jpg'
      ]
    }
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

    this.data.pid = options.pid

    this.data.title = options.name

    wx.setNavigationBarTitle({
      title: options.name
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
  }
})