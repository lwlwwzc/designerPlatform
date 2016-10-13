Page({
  data:{
    // text:"这是一个页面"
    filePaths:null
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    this.setData({
      hidden:false
    })
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  chooseTapped:function(e){
    var that = this;
    wx.chooseImage({
      success:function(res){
        that.setData({
          filePaths:res.tempFilePaths
        })

        console.log("已选择照片")
      }
    })
  },
  uploadTapped:function(e){
    if(this.data.filePaths != null)
    {
      var path = this.data.filePaths[0]

      wx.uploadFile({
        url:"http://localhost:8888/upload.php",
        filePath:path,
        name:'file',
        formData:{
          "user":"test"
        }
      })
    }
  }
})