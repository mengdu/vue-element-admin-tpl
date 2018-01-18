
## Keyboard

英文+数字+常用符号虚拟键盘

主要用于触控设备使用。

```html
<m-keyboard @key="handleKey" :disabled-keys="['q', 'enter']" capsLock></m-keyboard>
```

## Install

```
npm install -S m-keyboard
```

**user**:

```bat
import MKeyboard from 'm-keyboard'
Vue.use(MKeyboard)
```

## Keyboard Attributes

+ capsLock 大写，默认false
+ symbol 字符，默认false
+ width 宽度，String 或 Number；默认480
+ height 高度，String 或 Number；默认200
+ disabledKeys 禁用键，Array
+ lang-hide 隐藏语言切换按键，默认true
+ lang 语言，zh，en，默认en


## Keyboard Event

+ shift 按下shift事件
+ symbol 按下符号键
+ enter 按下enter键
+ back 按下退格键
+ key 按下输入键，回调参数为键值
+ lang 切换语言

## Py-Keyboard Attributes



`Py-Keyboard` 组件是中英文键盘，因为需要字典文件(2.7k+)支持，所以`index.js`导出的组件并不包含,需要手动导入。
`Py-Keyboard` 组件继承了 `Keyboard` 组件的属性与事件

+ candidate-len 候选词长度
+ sync 是否同步更新，默认false
+ listener 是否监听键盘事件，默认true


[字典文件来自sxei/pinyinjs](https://github.com/sxei/pinyinjs)
