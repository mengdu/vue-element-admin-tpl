import dicts from './dict'
const dict = {
  pyhz: dicts,
  azhz: {}
}

var pykeys = Object.keys(dict.pyhz)
// window.pykeys = pykeys
// window.dict = dict
// 构造a~z的汉字映射
for (var i = 97; i < 123; i++) {
  var ch = String.fromCharCode(i)
  var pylist = pykeys.filter(key => key.indexOf(ch) === 0)
  if (pylist.length > 0) {
    dict.azhz[ch] = ''
    pylist.forEach(key => {
      dict.azhz[ch] += dict.pyhz[key]
    })
  } else {
    dict.azhz[ch] = ch
  }
}

// 从拼音获取汉字
function getPinyinHanzi (pinyin) {
  if (dict.azhz[pinyin]) {
    return dict.azhz[pinyin]
  } else if (dict.pyhz[pinyin]) {
    return dict.pyhz[pinyin]
  } else {
    return ''
  }
}
// 分词
// function pinyinAnalysis (pinyin = '') {
//   var result = {
//     input: '',
//     result: []
//   }
//   var chs = pinyin.split('')
//   for (var i = 0; i < chs.length; i++) {
//     var ch = chs[i]
//     result.input += ch
//     var keys = pykeys.filter(pyk => pyk === result.input)

//     if (keys.length > 1) {
//       if (keys[0] === ch) {

//       }
//     } else if (keys.length === 1) {
//       result.result.push(result.input)
//       result.input = ''
//     } else {
//       result.result[result.result.length - 1] = result.input
//     }
//   }
//   return result
// }


function pinyinAnalysis (pinyin) {
  var result = {
    input: '',
    result: []
  }
  if (getPinyinHanzi(pinyin)) {
    result.input = pinyin
    result.result = pinyin
  }
  var temp = ''
  for (var i = 0; i < pinyin.length; i++) {
    temp += pinyin[i]
    if (!getPinyinHanzi(temp)) continue
    // flag表示如果当前能匹配到结果、并且往后5个字母不能匹配结果，因为最长可能是5个字母，如 zhuang
    var flag = false
    if ((i + 1) < pinyin.length) {
      for (var j = 1; j <= 5 && (i + j) < pinyin.length; j++) {
        if (getPinyinHanzi(pinyin.substr(0, i + j + 1))) {
          flag = true
          break
        }
      }
    }
    if (!flag) {
      result.result = pinyin.substr(0, i + 1) + '\'' + pinyin.substr(i + 1)
    }
  }
  result.input = pinyin
  return result
}


function getHanzi (py) {
  var result = {
    input: '',
    pinyin: '',
    result: []
  }
  if (!py) return result
  py = py.toLocaleLowerCase()
  if (!/^[a-zA-Z]*$/.test(py)) {
    result.result = [py].concat(py.split(''))
  } else {
    if (py.length === 1) {
      result.result = dict.azhz[py].split('')
    } else if (dict.pyhz[py]) {
      result.result = dict.pyhz[py].split('')
    } else {
      result.result = [py].concat(py.split(''))
    }
  }
  result.input = py
  result.pinyin = py
  return result
}

export default {
  dict,
  getHanzi,
  getPinyinHanzi,
  pinyinAnalysis
}
