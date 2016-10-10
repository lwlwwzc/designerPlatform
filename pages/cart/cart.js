Page({
  data:{
    // text:"这是一个页面"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
    var context = wx.createContext()
    context.rect(5, 5, 25, 15)
    context.stroke()
    context.scale(2, 2) //再放大2倍
    context.rect(5, 5, 25, 15)
    context.stroke()
    context.scale(5, 5) //再放大2倍
    context.rect(5, 5, 25, 15)
    context.stroke()
    wx.drawCanvas({
      canvasId: 1,
      actions: context.getActions()
    })
  },
  onShow:function(){
    // 页面显示
    wx.setStorage({
      key:'bft',
      data:"hhh"
    })
  },
  onHide:function(){
    // 页面隐藏
    var value = wx.getStorageSync('bft')
    console.log("---------value is " + value + "----------------")
  },
  onUnload:function(){
    // 页面关闭
  },
  onPullDownRefreash:function(){
    consoleconsole.log("onPullDownRefreash");
  }
})