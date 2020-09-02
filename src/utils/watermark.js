export default function Watermark (name, opts = {}) {
  return new Promise(function (resolve, reject) {
    const options = {
      color: '#3E3E50',
      env: 'development',
      time: new Date(),
      output: '',
      width: 200,
      height: 200,
      ...opts
    }

    const svg = `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="watermark-svg"
      viewBox="0 0 35 35"
      width="200"
      height="200">
        <g class="path" transform="rotate(-45, 17.5, 17.5)" fill="${options.color}" font-family="Segoe UI,Arial">
          <text text-anchor="start" x="25%" y="50%" font-size="4">${name}</text>
          <text text-anchor="start" x="25%" y="50%" dy="-3.5" dx="0" font-size="2">${options.env}</text>
          <text text-anchor="start" x="25%" y="50%" dy="3" dx="0" font-size="2">${options.time}</text>
        </g>
      </svg>`

    if (options.output === 'svg') {
      resolve(svg)
      return false
    }

    const img = new Image()
    img.width = options.width
    img.height = options.height

    img.onload = function () {
      if (options.output === 'img') {
        resolve(img)
        return false
      }

      const canvas = document.createElement('canvas')
      canvas.width = options.width
      canvas.height = options.height
      let ctx = null

      try {
        ctx = canvas.getContext('2d')
      } catch (err) {
        reject(err.message)
        return false
      }

      ctx.drawImage(img, 0, 0)

      resolve(canvas.toDataURL('image/png'))
    }

    img.onerror = function (err) {
      reject(err)
    }

    const url = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml;charset=utf-8' }))

    // 不转图片svg做背景会存在一些兼容性
    img.src = url
  })
}
