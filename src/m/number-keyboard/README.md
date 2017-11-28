
## NumberKeyboard

英文+数字+常用符号虚拟键盘

```html
<m-number-keyboard @key="handleKey2" :size="480" :disabled-keys="['.', 'Space']"></m-number-keyboard>
```

## NumberKeyboard Attributes

+ size 尺寸，Number；默认320
+ disabledKeys 禁用键，Array

## NumberKeyboard Event


+ enter 按下enter键
+ space 按下空格键
+ key 按下输入键，回调参数为键值
