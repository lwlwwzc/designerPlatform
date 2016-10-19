//index.js
//获取应用实例

var util = require( '../../utils/util.js' )

var app = getApp()

Page( {
  data: {
    isLogin: true,
    user: {
      name: 'lwl'
    },
    screenSize: null,
    hidden: true,

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
      }
    ],
    contentList: [
      {
        title: "成为设计师",
        itemList: [
          {
            title: "唐伯虎",
            imgUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
          },
          {
            title: "李白",
            imgUrl: "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg"
          },
          {
            title: "陶渊明",
            imgUrl: "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
          }
        ]
      },
      {
        title: "设计精选",
        itemList: [
          {
            title: "丝巾",
            imgUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
          },
          {
            title: "枕头套",
            imgUrl: "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg"
          },
          {
            title: "礼服",
            imgUrl: "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
          }
        ]
      },
      {
        title: "设计师故事",
        itemList: [
          {
            title: "唐伯虎",
            imgUrl: "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg"
          },
          {
            title: "李白",
            imgUrl: "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg"
          },
          {
            title: "陶渊明",
            imgUrl: "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
          }
        ]
      }
    ]
  },
  onLoad: function( options ) {
    // 页面初始化 options为页面跳转所带来的参数
    this.setData( {
      hidden: false
    })

    var that = this
    util.screenSize().then(
      function( res ) {
        that.onGetScreenSize( res )
      }
    )

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
