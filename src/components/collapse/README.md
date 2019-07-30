
# Collapse

折叠面板

**collapse**

```html
<m-collapse v-model="collapse">
  <m-collapse-item name="1" title="Collapse 1">Collapse item 1</m-collapse-item>
  <m-collapse-item name="2" title="Collapse 2">Collapse item 2</m-collapse-item>
  <m-collapse-item name="3" title="Collapse 3">Collapse item 3</m-collapse-item>
  <m-collapse-item name="4" title="Collapse 4">Collapse item 4</m-collapse-item>
  <m-collapse-item name="5" title="Collapse 5">Collapse item 5</m-collapse-item>
</m-collapse>
```

## Collapse

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value     |  当前激活的面板（支持 `v-model` ；如果要手风琴效果请传入array）   | array/string |  —  |  — |
| simple     |  简单风格 | boolean |  true/false  | false |

## Collapse 事件

| 事件名      | 说明    | 参数  |
|---------- |-------- |---------- |-------------  |-------- |
| change    |  value 改变时   |  value   |  value: array|string   |

## CollapseItem

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| name     |  当前面板的名字，必须   | string/number |  —  |  — |
| title     |  当前面板标题 | string | —  |  — |
| hide-arrow     |  是否隐藏arrow图标 | boolean | —  |  — |


**collapse-container**

```html

<m-collapse-container :show="show" :use-if="useIf" appear>
  <div style="width: 800px; background: #ccc; height: 400px; padding: 15px;"></div>
</m-collapse-container>

```

## CollapseContainer 属性

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| open      |  展开   | boolean | true/false |   false    |
| useIf     | 是否使用 v-if | boolean | true/false |   false    |
| appear     | transition 的appear属性   | boolean | true/false |   false    |
| fade-class-name     |  过渡类名  | string |  — | 'm-collapse-transition'    |
| mode     | transition 的mode属性   |  string |  —  |    —   |


# collapse-transition

折叠过渡组件

```html
<m-collapse-transition>
  <div v-show="show"></div>
</m-collapse-transition>
```

## CollapseTransition 属性

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| appear     | transition 的appear属性   | boolean | true/false |   false    |
| fade-class-name     |  过渡类名  | string |  — | 'm-collapse-transition'    |
| mode     | transition 的mode属性   |  string |  —  |    —   |
