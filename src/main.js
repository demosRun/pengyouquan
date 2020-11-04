function scrollIntoView () {
  window.scrollTo(0, 0)
}

// 阻止微信拖动
// document.body.addEventListener('touchmove', function (e) {
//   e.preventDefault() // 阻止默认的处理方式(阻止下拉滑动的效果)
// }, {passive: false})

setTimeout(() => {
  autoScale({
    deviseW: 750,
    deviseH: 1508,
    center: 'top',
    scroll: false,
    type: 'scale',
    box: '.scale-box',
    callBack: function (info) {
      var topValue = 30 / info.scale + 'px'

      document.querySelectorAll('.auto-scroll-box').forEach(element => {
        element.style.height = autoScaleInfo.showHeight - 60 + 'px'
        element.style.paddingTop = '60px'
      });
    }
  })
}, 100);

window.isWeiXin = /MicroMessenger/i.test(navigator.userAgent)
var turnHref = 'http://paike.people.com.cn/lianliankan/Daliangshan/index'
var userInfo = {
  nickName: '朋友',
}
// 如果是微信则跳转到 授权页面
if (window.isWeiXin) {
  if (location.href.indexOf('id=') > -1) {
    var arr = /id=([a-z0-9A-Z]+)/.exec(location.href)
    if (arr) {
      window.pid = arr[1]
      console.log('是微信打开的，pid是' + window.pid)
      
      if (window.pid) {
        // alert(window.pid)
        $.ajax({
          url: "http://paike.people.com.cn/lianliankan/Daliangshan/getUser?id=" + window.pid,
          dataType: "jsonp", //指定服务器返回的数据类型
        }).done(function(data) {
          // alert(JSON.stringify(data))
          if (data.msg) {
            // alert(data.msg.nickName)
            // alert(data.msg.headImg)
            userInfo = data.msg
          }
          
        }).fail(function (err) {
          alert(JSON.stringify(err))
        });
      }
      
      
    }
  } else {
    if (/Android/i.test(navigator.userAgent)) {
      location.href = turnHref + '?t=' + new Date()
    } else {
      location.href = turnHref
    }
  }
}