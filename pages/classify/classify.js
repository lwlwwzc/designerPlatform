Page({
  data: {
    // text:"这是一个页面"
    pageHeight:0,

    classifyList: [
      {
        id: 0,
        name: '中国风格',
        bgImgUrl: "http://img1.imgtn.bdimg.com/it/u=637467956,3257203163&fm=21&gp=0.jpg"
      },
      {
        id: 1,
        name: '日系风格',
        bgImgUrl: "http://img1.imgtn.bdimg.com/it/u=637467956,3257203163&fm=21&gp=0.jpg"
      },
      {
        id: 2,
        name: '韩系风格',
        bgImgUrl: "http://img1.imgtn.bdimg.com/it/u=3912426461,4180125672&fm=21&gp=0.jpg"
      },
      {
        id: 3,
        name: '欧美风格',
        bgImgUrl: "http://img.tuku.cn/file_big/201505/102f83ab040149f9805785a3fdeaae93.jpg"
      },
      {
        id: 4,
        name: '抽象风格',
        bgImgUrl: "http://img.tuku.cn/file_big/201505/102f83ab040149f9805785a3fdeaae93.jpg"
      },

    ]
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示

    this.setData({
      pageHeight:this.data.classifyList.length * 380
    });
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },

  //事件方法
  itemTap: function (event) {

    var id = event.currentTarget.dataset.type;
    var name = event.currentTarget.dataset.name;
    wx.navigateTo({
      url: '/pages/prdtList/prdtList?id=' + id + "&name=" + name
    })
  }
})