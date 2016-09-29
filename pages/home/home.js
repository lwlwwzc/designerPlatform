//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    location:''
  },
  //事件处理函数
  bindViewTap: function() {
    var cur = app.getCurrentPage()
    // console.log(cur)
    wx.navigateTo({
      url: '../list/list'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this

    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })

    wx.getLocation({
      type:'gcj02',
      success:function(res){
        var latitude = res.latitude;
        var longitude = res.longitude;
        var speed = res.speed;
        var accuracy = res.accuracy;

        that.setData({
          location:'lat:' + latitude + '\n lon:' + longitude + '\n speed:' + speed
        })
      }

    })
  }
})
