//index.js
//获取应用实例

var util = require( '../../utils/util.js' )

var app = getApp()

Page( {
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    screenSize: null,
    imgSize: null,
    hidden: true,

    banners: [
      {
        bannerId: "1",
        bannerUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
      },
      {
        bannerId: "2",
        bannerUrl: "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg"
      },
      {
        bannerId: "3",
        bannerUrl: "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
      }
    ],

    recomList: [
      {
        name: "设计师1",
        avatar: "../../assets/image/icon1.jpg",
        newList: [
          "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
          "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
          "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg",
          "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
        ]
      },
      {
        name: "设计师2",
        avatar: "../../assets/image/icon2.jpg",
        newList: [
          "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
          "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
          "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg",
          "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
        ]
      },
      {
        name: "设计师3",
        avatar: "../../assets/image/icon3.jpg",
        newList: [
          "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
          "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
          "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg",
          "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
        ]
      },
    ]
  },
  onLoad: function( options ) {
    // 页面初始化 options为页面跳转所带来的参数
    this.setData( {
      hidden: false
    })
    wx.getSystemInfo( { success: this.onGetScreenSize })

  },
  onReady: function() {
    // 页面渲染完成
  },
  onShow: function() {
    // 页面显示
  },
  onHide: function() {
    // 页面隐藏
  },
  onUnload: function() {
    // 页面关闭
  },

  onGetScreenSize: function( res ) {
    this.setData( {
      screenSize: { "width": res.windowWidth, "height": res.windowHeight }
    })

    console.log( "width:" + res.windowWidth + " height:" + res.windowHeight )

    var w = ( this.data.screenSize.width - 50 ) / 2

    this.setData( {
      imgSize: { width: w, height: w }
    })

    var that = this;
    setTimeout( function() {
      that.setData( {
        hidden: true
      })
    }, 2000 )
  },


  //普通方法
  bannerTapped: function( event ) {
    var id = event.currentTarget.id;

    console.log( "img" + id );
  }
})
