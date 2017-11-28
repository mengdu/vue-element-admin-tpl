
## Keyboard

英文+数字+常用符号虚拟键盘

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

+ capsLock 大写
+ symbol 字符
+ width 宽度，String 或 Number；默认480
+ height 高度，String 或 Number；默认200
+ disabledKeys 禁用键，Array

## Keyboard Event

+ shift 按下shift事件
+ symbol 按下符号键
+ enter 按下enter键
+ back 按下退格键
+ key 按下输入键，回调参数为键值
