## Layout

布局组件

```html
<m-container class="admin-container" direction="horizontal">
  <m-sider width="60" background="#2c4350" color="#fff">
    <a href="/"><img width="40" src="https://puui.qpic.cn/vupload/0_20171008/logo_square.png/0" class="logo" /></a>
    <a href="#"><img src="https://avatars1.githubusercontent.com/u/11366654?s=40&v=4" class="user-avator" alt=""></a>
  </m-sider>
  <m-sider width="240" background="#F4F5F7">
    <div class="text-center" style="margin-top: 50px">
      <img width="120" src="http://i.gtimg.cn/qqlive/images/20170712/logo_gold.svg" alt="">
    </div>
    <ul class="placeholder-list">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </m-sider>
  <m-container>
    <m-header>header</m-header>
    <m-main><router-view /></m-main>
    <m-footer>footer</m-footer>
  </m-container>
</m-container>
```

### Container

容器

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| direction | 排列方向 | string | vertical/horizontal | vertical |

### Sider

侧边栏

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| width | 宽度 | string | —  | —  |
| background | 背景颜色 | string | —  | — |
| color | 字体颜色 | string | — | — |

### Header

头部

 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| height | 高度 | string | —  | —  |
| background | 背景颜色 | string | —  | — |
| color | 字体颜色 | string | — | — |

### Footer

尾部

 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| height | 高度 | string | —  | —  |
| background | 背景颜色 | string | —  | — |
| color | 字体颜色 | string | — | — |

### Main

主体
