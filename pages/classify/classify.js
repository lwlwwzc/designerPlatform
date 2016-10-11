Page( {
  data: {
    itemList: null
  },
  onLoad: function( options ) {
    // 页面初始化 options为页面跳转所带来的参数

    var list = [
      {
        id: "z001",
        imageUrl: "http://bpic.pic138.com/12/85/38/82b1OOOPICde.jpg",
        title: "中国风",
        btnList: [
          {
            id: "z001-1",
            title: "周杰伦"
          },
          {
            id: "z001-2",
            title: "王大仙"
          },
          {
            id: "z001-3",
            title: "刘德华"
          },
          {
            id: "z001-4",
            title: "吕丞天"
          },
          {
            id: "z001-5",
            title: "李小龙"
          },
          {
            id: "z001-6",
            title: "李连杰"
          }
        ]
      },
      {
        id: "r001",
        imageUrl: "http://img1.imgtn.bdimg.com/it/u=637467956,3257203163&fm=21&gp=0.jpg",
        title: "日系风格",
        btnList: [
          {
            id: "r001-1",
            title: "初音"
          },
          {
            id: "r001-2",
            title: "火影忍者"
          },
          {
            id: "r001-3",
            title: "海贼王"
          },
          {
            id: "r001-3",
            title: "名侦探柯南"
          }
        ]
      },
      {
        id: "h001",
        imageUrl: "http://img1.imgtn.bdimg.com/it/u=3912426461,4180125672&fm=21&gp=0.jpg",
        title: "韩系风格",
        btnList: [
          {
            id: "h001-1",
            title: "李敏镐"
          },
          {
            id: "h001-2",
            title: "都敏俊"
          },
          {
            id: "h001-3",
            title: "全智贤"
          },
          {
            id: "h001-4",
            title: "金喜善"
          }
        ]
      },
      {
        id: "m001",
        imageUrl: "http://img.tuku.cn/file_big/201505/102f83ab040149f9805785a3fdeaae93.jpg",
        title: "欧美风格",
        btnList: [
          {
            id: "m001-1",
            title: "星球大战"
          },
          {
            id: "m001-2",
            title: "速度与激情"
          },
          {
            id: "m001-3",
            title: "终结者"
          },
          {
            id: "m001-4",
            title: "复仇者联盟"
          },
          {
            id: "m001-5",
            title: "正义联盟"
          },
          {
            id: "m001-6",
            title: "X战警"
          }
        ]
      }
    ]

    this.setData({
      itemList:list
    })

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


  //普通方法
  imageTap: function( event ) {

    console.log( "item clicked" );
  },

  viewloaded: function( event ) {
    console.log( "view loaded" );
  }

})