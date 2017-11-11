## Checkbox

多选框

```html
<m-checkbox>多选框</m-checkbox>
```

or 

```html
<m-checkbox label="多选框" />
```

组

```html
<m-checkbox-group>
  <m-checkbox val="aaa" checked>aaa</m-checkbox>
  <m-checkbox val="bbb" :checked="false">bbb</m-checkbox>
  <m-checkbox val="ccc">ccc</m-checkbox>
  <m-checkbox val="eee">eee</m-checkbox>
</m-checkbox-group>
```


### Checkbox Attributes

  + value 绑定的数组
  + name 原生name
  + type 主题类型 primary, success, danger, warning
  + checked 初始化选中（mounted中触发，服务端渲染不支持），默认false
  + disabled 禁用
  + value v-model
  + val 当前多选框值，Boolean, Array, String, Number；默认Boolean
  + trueVal 选中值
  + falseVal 取消选择值
  + label 文本

### Checkbox Events

  + chagne 值变化触发

### CheckboxGroup Attributes

  + value 绑定的数组

### CheckboxGroup Attributes

  + chagne 之变化触发
