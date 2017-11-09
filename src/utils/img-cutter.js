function image (src) {
  return new Promise((resolve, reject) => {
    var img = new Image()
    img.onload = () => {
      resolve({
        scr: src,
        el: img,
        width: img.width,
        height: img.height
      })
    }
    img.onerror = () => {
      reject(new Error('图片加载失败'))
    }
    img.src = src
  })
}
function ImgCutter () {}

function copyCanvas (data) {
  var canvas = document.createElement('CANVAS')
  canvas.height = data.height
  canvas.width = data.width
  var ctx = canvas.getContext('2d')
  ctx.putImageData(data, 0, 0, 0, 0, data.width, data.height)
  return ctx
}
function Cutter (img) {
  this.img = img
  var canvas = document.createElement('CANVAS')
  this.canvas = canvas
  this.ctx = canvas.getContext('2d')
  this.init()
}
// 设置图片
ImgCutter.prototype.src = function (src) {
  return new Promise((resolve) => {
    if (!src) reject(new Error('图片路径不能为空'))
    image(src).then(img => {
      resolve(new Cutter(img))
    })
  })
}

ImgCutter.ImgCutter = ImgCutter

/**
* 初始化
**/
Cutter.prototype.init = function () {
  this.canvas.width = this.img.width
  this.canvas.height = this.img.height
  this.ctx.drawImage(this.img.el, 0, 0)
  return this
}

/**
* 缩放
* @param {zoom} 缩放系数，注意canvas最大尺寸有上限
* @return {this}
**/
Cutter.prototype.zoom = function (zoom) {
  if (typeof zoom !== 'number') {
    console.wran('zoom 必须是 number')
    zoom = 1
  }
  // 保存上一帧，canvas修改宽度需要重绘
  var imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height)
  var temp = copyCanvas(imageData)
  this.canvas.width = this.canvas.width * zoom
  this.canvas.height = this.canvas.height * zoom
  this.ctx.drawImage(temp.canvas, 0, 0, this.canvas.width, this.canvas.height)
  return this
}

/**
* 指定尺寸
* @param {w} 宽度，必须
* @param {h} 高度，可选，如果为空，宽度默认为宽度
* @return {this}
**/
Cutter.prototype.size = function (w, h) {
  var width = Math.abs(parseInt(w))
  var height = Math.abs(parseInt(h))
  var imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height)
  var temp = copyCanvas(imageData)
  if (width && height) {
    this.canvas.width = width
    this.canvas.height = height
  } else if (width && !height) {
    this.canvas.width = width
    this.canvas.height = width
  }
  this.ctx.drawImage(temp.canvas, 0, 0, this.canvas.width, this.canvas.height)
  return this
}

/**
* 从x,y开始裁剪图片，尺寸w,h
* @param {x} 开始位置x
* @param {y} 开始位置y
* @param {w} 截取宽度
* @param {h} 截取高度
**/
Cutter.prototype.clip = function (x, y, w, h) {
  var left = Math.abs(parseInt(x))
  var top = Math.abs(parseInt(y))
  var width = Math.abs(parseInt(w)) || this.canvas.width
  var height = Math.abs(parseInt(h)) || this.canvas.height
  var imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height)
  var temp = copyCanvas(imageData)
  this.canvas.width = width
  this.canvas.height = height
  this.ctx.drawImage(temp.canvas, left, top, width, height, 0, 0, this.canvas.width, this.canvas.height)
  return this
}

/**
* 导出Blob
* @param {mime} 图片类型，默认image/png
* @param {quality} 图片质量，0~1；默认1
* @return {Blob}
**/
Cutter.prototype.toBlob = function (mime, quality) {
  return new Promise((resolve, reject) => {
    if (!this.canvas.toBlob) reject(new Error('canvas对象不支持toBlob方法'))
    this.canvas.toBlob(blob => resolve(blob), mime, quality)
  })
}

/**
* 导出base64
* @param {mime} 图片类型，默认image/png
* @param {quality} 图片质量，0~1；默认1
* @return {String}
**/
Cutter.prototype.toBase64 = function (mime, quality) {
  return new Promise((resolve, reject) => {
    var base64 = this.canvas.toDataURL(mime, quality)
    resolve(base64)
  })
}

const imgcutter = new ImgCutter
export {
  imgcutter as default,
  image,
  Cutter
}
