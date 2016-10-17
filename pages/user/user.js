var net = require('../../utils/net.js')

Page({
  data:{
    // text:"这是一个页面"
    animationData: {}
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成

    // net.get('http://www.baidu.com')
    // .then(this.onRequestSuccess)
    // .catch(this.onRequestFail)

  },
  onShow:function(){
    // 页面显示
    var animation = wx.createAnimation({
      duration: 1000,
        timingFunction: 'ease',
    })

    this.animation = animation

    this.rotateAndScaleThenTranslate()

    // animation.scale(2,2).rotate(45).step()

    // this.setData({
    //   animationData:animation.export()
    // })

    // setTimeout(function() {
    //   animation.translate(30).step()
    //   this.setData({
    //     animationData:animation.export()
    //   })
    // }.bind(this), 1000)
  },
  onHide:function(){

    // 页面隐藏
    // this.setData({
    //   animationData:this.animation.export()
    // })
  },
  onUnload:function(){
    // 页面关闭
  },

  rotateAndScale: function () {
    // 旋转同时放大
    this.animation.rotate(45).scale(2, 2).step()
    this.setData({
      animationData:this.animation.export()
    })
  },
  rotateThenScale: function () {
    // 先旋转后放大
    this.animation.rotate(45).step()
    this.animation.scale(2, 2).step()
    this.setData({
      animationData:this.animation.export()
    })
  },
  rotateAndScaleThenTranslate: function () {
    // 先旋转同时放大，然后平移
    this.animation.opacity(0.2).step()
    this.animation.rotate(45).scale(2, 2).step()
    this.animation.translate(100, 100).step({ duration: 1000 })
    this.setData({
      animationData:this.animation.export()
    })
  },

  onRequestSuccess:function(res) {
    console.log("网络请求成功")
    console.log(res.data)
  },

  onRequestFail:function(res) {
    console.log("网络请求失败")
  },

  onRequestComplete:function(res) {
    console.log("网络请求完成")
  }
})