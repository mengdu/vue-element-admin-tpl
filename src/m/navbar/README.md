
## Navbar

```html
<m-navbar>
  <m-navbar-brand>Navbar</m-navbar-brand>
  <m-nav>
    <m-nav-item name="home" off-click>首页</m-nav-item>
    <m-nav-item path="/article" disabled>专栏</m-nav-item>
    <m-nav-item disabled>用户中心</m-nav-item>
  </m-nav>
</m-navbar>
```

### Navbar Attributes

+ theme 主题类型 drak,info,primary,success,warmning

### Navbar Events

+ command 点击非连接时回调cmd

### Nav Attributes

+ align 浮动，left/right

### NavItem Attributes

+ name 路由名称
+ path 路由path
+ disabled 禁用
+ off-click 禁用click响应
+ active 焦点
+ cmd item标签
