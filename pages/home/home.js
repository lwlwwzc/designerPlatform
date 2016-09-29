//index.js
//获取应用实例
var app = getApp()
Page({
  data:{
    items:null,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,

    banners:[
      {
        bannerId:"1",
        bannerUrl:"http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
      },
      {
        bannerId:"2",
        bannerUrl:"http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg"
      },
      {
        bannerId:"3",
        bannerUrl:"http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
      }
    ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var list = new Array();
    for(var i =0; i<100;i++)
    {
      var item = {index:i, value:"item"+i}
      list[i] = item
    }

    this.data.items = list;
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },


  //普通方法
  bannerTapped:function(event) {
    var id = event.currentTarget.id;

    console.log("img" + id);
  }
})
