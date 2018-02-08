
## Dropdown


```html
<m-dropdown>
  <a href="#">Dropdown</a>
  <m-dropdown-panel>
    <m-dropdown-item>点赞</m-dropdown-item>
    <m-dropdown-item>转发</m-dropdown-item>
    <m-dropdown-item>用户信息</m-dropdown-item>
    <m-dropdown-item><a href="/login">分享</a></m-dropdown-item>
    <m-dropdown-item path="/login">退出</m-dropdown-item>
  </m-dropdown-panel>
</m-dropdown>
```

### Dropdown Attributes

+ align 水平对齐，可选left，right；默认left。
+ vertical-align 垂直方向对齐，可选top，bottom；默认top；
+ trigger
+ waitTime

### Dropdown Events

+ command 点击item后触发的命令，回调一个cmd


### DropdownItem Attributes

+ name 路由名称
+ path 路由路径
+ cmd item的标签
+ disabled 是否禁用，默认false
+ offClick 禁用点击后关闭，默认点击后关闭
