Page({
  data:{
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    }
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log("des on load");

    wx.request ({
      url:'http://www.baidu.com',
      success:function(res){
        var data = res.data;
        console.log(data);
      },
      fail:function(res){
        console.log("fail");
      },
      complete:function(res){
        console.log("complete");
      }
    });
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
  }
})