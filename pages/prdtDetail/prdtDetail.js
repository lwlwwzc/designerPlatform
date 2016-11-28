Page({
  data: {
    // text:"这是一个页面"
    title: null,
    pid: null,
    prdtInfo: {
      pid: 1,
      headerImgList: [
        'http://pic54.nipic.com/file/20141202/432252_022410485001_2.jpg',
        'http://img1.imgtn.bdimg.com/it/u=637467956,3257203163&fm=21&gp=0.jpg',
        'http://img1.imgtn.bdimg.com/it/u=3912426461,4180125672&fm=21&gp=0.jpg'
      ],
      introduce:'房价肯定jfk的jfk地方艰苦的接口就分开的jfk房间肯德基看风景的看房价肯定就发',
      avatar:'/assets/image/icon1.jpg',
      artist:'李文磊',
      detailList:[
        {imageUrl:'/assets/image/icon1.jpg', content:'发了鸡豆凉粉鸡豆凉粉就的法律角度来讲发的揭发老大家乐福的链接发来的'},
        {imageUrl:'/assets/image/icon2.jpg', content:'发了鸡豆凉粉鸡豆凉粉就的法律角度来讲发的揭发老大家乐福的链接发来的'},
        {imageUrl:'/assets/image/icon3.jpg', content:'发了鸡豆凉粉鸡豆凉粉就的法律角度来讲发的揭发老大家乐福的链接发来的'}
      ],
      otherPrdtList:[
        {
          pid:2,
          imgUrl:'/assets/image/icon1.jpg'
        },
        {
          pid:3,
          imgUrl:'/assets/image/icon2.jpg'
        },
        {
          pid:4,
          imgUrl:'/assets/image/icon3.jpg'
        }
      ]
    },
    warning:'凡客京东客服接口的经济就打开房间打开缴款降低房价肯定对抗肌肤抵抗防静电架空地方jfk的接口'
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

    this.data.pid = options.pid

    this.data.title = options.name

    wx.setNavigationBarTitle({
      title: options.name
    })
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
  basketBtnTap: function (event) {
    wx.showToast({
      title: '购物车',
      icon: 'success',
      duration: 2000
    })
  },
  favBtnTap: function (event) {
    wx.showToast({
      title: '收藏',
      icon: 'success',
      duration: 2000
    })
  },
  joinBtnTap: function (event) {
    wx.showToast({
      title: '加入购物车',
      icon: 'success',
      duration: 2000
    })
  }
})