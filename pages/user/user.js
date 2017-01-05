var net = require('../../utils/net.js')

Page({
  data: {
    // text:"这是一个页面"
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成

    // net.get('http://www.baidu.com')
    // .then(this.onRequestSuccess)
    // .catch(this.onRequestFail)

  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {

    // 页面隐藏
    // this.setData({
    //   animationData:this.animation.export()
    // })
  },
  onUnload: function () {
    // 页面关闭
  },

  //事件方法
  itemTap: function (event) {
    var itemIndex = event.currentTarget.dataset.index;
    if (itemIndex == 0) {
      wx.navigateTo({
        url: '/pages/becomeArtist/becomeArtist'
      })
    }
  }
})