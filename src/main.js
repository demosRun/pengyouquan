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
      document.querySelector('.page2').style.paddingTop = topValue
      document.querySelector('.page-3').style.paddingTop = topValue
      // 第三页
      document.querySelector('.bottom-bar').style.bottom = -2 * autoScaleInfo.hideHeight + 0 + 'px'
      document.querySelector('.message-box').style.height = autoScaleInfo.showHeight + 'px'
    }
  })
}, 100);