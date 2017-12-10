// 进入全屏
export function requestFullScreen () {
  var elem = document.documentElement
  if (elem.requestFullscreen) {
    elem.requestFullscreen()
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen()
  } else if (elem.webkitRequestFullScreen) {
    elem.webkitRequestFullScreen()
  } else if (elem.msRequestFullscreen) {
    // elem.msRequestFullscreen() 没有指定元素
    document.body.msRequestFullscreen()
  }
}
// 退出全屏
export function exitFullscreen () {
  var doc = document
  if (doc.exitFullscreen) {
    doc.exitFullscreen()
  } else if (doc.mozCancelFullScreen) {
    doc.mozCancelFullScreen()
  } else if (doc.webkitCancelFullScreen) {
    doc.webkitCancelFullScreen()
  } else if (doc.msExitFullscreen) {
    document.msExitFullscreen()
  }
}
