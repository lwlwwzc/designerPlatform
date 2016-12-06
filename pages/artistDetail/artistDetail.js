Page({
  data: {
    // text:"这是一个页面"
    headerImg: "/assets/image/headerimg.jpg"
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

    console.log("我是设计师详情")
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

  //事件函数函数

  favBtnTap: function (event) {
    wx.showToast({
      title: '收藏',
      icon: 'success',
      duration: 2000
    })
  }
})