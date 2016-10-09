function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function ScreenSize(){
  var size = null;

  wx.getSystemInfo({
    success:function(res){
      size = {"width":res.windowWidth, "height":res.windowHeight}
    }
  })

  setTimeout("return size", 2000)
}

module.exports = {
  ScreenSize:ScreenSize,
  formatTime: formatTime
}
