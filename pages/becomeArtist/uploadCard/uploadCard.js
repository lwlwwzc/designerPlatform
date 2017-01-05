// /pages/becomeArtist/uploadCard/uploadCard.js
Page({
  data: {
    cardImage: {
      front: '/assets/image/card1.jpg',
      back: '/assets/image/card2.jpg',
      hold: '/assets/image/card1.jpg'
    }
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
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

  //事件方法
  uploadCardTap: function (event) {
    var uploadType = event.currentTarget.dataset.type;
    if(uploadType == 'front'){
      console.log('front');
    }else if(uploadType == 'back'){
      console.log('back');
    }else if(uploadType == 'hold'){
      console.log('hold');
    }
  }
})