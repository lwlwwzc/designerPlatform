Page( {
  data: {
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    },
    actionHidden: true,
    tabViewList: [
      {
        tabId: 0,
        title: '热门'
      },
      {
        tabId: 1,
        title: '最新'
      }
    ],
    artistList: [
      {
        artistId: 0,
        iconUrl: "/assets/image/icon1.jpg",
        name: "李白",
        attention: false,
        hotList: [
          {
            hotId: 1,
            imgUrl: "/assets/image/icon2.jpg"
          },
          {
            hotId: 2,
            imgUrl: "/assets/image/icon3.jpg"
          },
          {
            hotId: 3,
            imgUrl: "/assets/image/icon1.jpg"
          }
        ]
      },
      {
        artistId: 1,
        iconUrl: "/assets/image/icon2.jpg",
        name: "路飞",
        attention: true,
        hotList: [
          {
            hotId: 1,
            imgUrl: "/assets/image/icon2.jpg"
          },
          {
            hotId: 2,
            imgUrl: "/assets/image/icon3.jpg"
          },
          {
            hotId: 3,
            imgUrl: "/assets/image/icon1.jpg"
          }
        ]
      },
      {
        artistId: 1,
        iconUrl: "/assets/image/icon3.jpg",
        name: "superman",
        attention: false,
        hotList: [
          {
            hotId: 1,
            imgUrl: "/assets/image/icon2.jpg"
          },
          {
            hotId: 2,
            imgUrl: "/assets/image/icon3.jpg"
          },
          {
            hotId: 3,
            imgUrl: "/assets/image/icon1.jpg"
          }
        ]
      },
      {
        artistId: 1,
        iconUrl: "/assets/image/icon3.jpg",
        name: "superman",
        attention: false,
        hotList: [
          {
            hotId: 1,
            imgUrl: "/assets/image/icon2.jpg"
          },
          {
            hotId: 2,
            imgUrl: "/assets/image/icon3.jpg"
          },
          {
            hotId: 3,
            imgUrl: "/assets/image/icon1.jpg"
          }
        ]
      },
      {
        artistId: 1,
        iconUrl: "/assets/image/icon3.jpg",
        name: "superman",
        attention: false,
        hotList: [
          {
            hotId: 1,
            imgUrl: "/assets/image/icon2.jpg"
          },
          {
            hotId: 2,
            imgUrl: "/assets/image/icon3.jpg"
          },
          {
            hotId: 3,
            imgUrl: "/assets/image/icon1.jpg"
          }
        ]
      },
      {
        artistId: 1,
        iconUrl: "/assets/image/icon3.jpg",
        name: "superman",
        attention: false,
        hotList: [
          {
            hotId: 1,
            imgUrl: "/assets/image/icon2.jpg"
          },
          {
            hotId: 2,
            imgUrl: "/assets/image/icon3.jpg"
          },
          {
            hotId: 3,
            imgUrl: "/assets/image/icon1.jpg"
          }
        ]
      },
      {
        artistId: 1,
        iconUrl: "/assets/image/icon3.jpg",
        name: "superman",
        attention: false,
        hotList: [
          {
            hotId: 1,
            imgUrl: "/assets/image/icon2.jpg"
          },
          {
            hotId: 2,
            imgUrl: "/assets/image/icon3.jpg"
          },
          {
            hotId: 3,
            imgUrl: "/assets/image/icon1.jpg"
          }
        ]
      }
    ],
    curTabIndex: 0
  },
  onLoad: function( options ) {
    // 页面初始化 options为页面跳转所带来的参数
    console.log( "des on load" );
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
  onPullDownRefresh: function() {
    // Do something when pull down
    console.log( "loading......" )

    setTimeout( function() {
      wx.stopPullDownRefresh()
    }, 3000 )

  },

  btnTapped: function( event ) {
    this.setData( {
      actionHidden: !this.data.actionHidden
    })
  },
  actionChange: function( e ) {
    this.setData( {
      actionHidden: !this.data.actionHidden
    })
  },
  tabItemTap: function( event ) {
    var index = event.currentTarget.id;
    this.setData( {
      curTabIndex: index
    })
  }
})