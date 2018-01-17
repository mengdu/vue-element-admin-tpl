## Button

Button常用的操作按钮。

```html
<m-button>defaut</m-button>
```

**按钮组：**

```html
<m-button-group>
  <m-button type="info">首页</m-button>
  <m-button type="info">热门</m-button>
  <m-button type="info">专栏</m-button>
</m-button-group>
```

### Button Attributes

+ disabled 禁用状态
+ type 主题 info，primary，warning，danger，success
+ size 大小 max, large, 默认, samll, mini
+ plain 朴素按钮
+ round 圆形按钮
+ block 块按钮
+ active 焦点
+ effect 焦点涟漪效果，默认开启
+ router 路由对象会这路由path，内部执行的是this.$router.push方法
