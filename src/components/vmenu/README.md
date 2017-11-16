
## VMenu

```html
<v-menu :collapse="collapse" :menus="menus" router class="side-menu"></v-menu>
```

`v-menu`组件基于`el-menu`一组件，新增加了 `menus` props属性，这个是个对象树，这样可以直接以对象形式快速菜单目录

## Props menus

```js

var menus = [
  {id: '0', label: '菜单1'},
  {id: '1', label: '菜单2'},
  {
    id: '2',
    label: '展开菜单1',
    // 具有分组
    submenu: [
      [
        '组名1',
        [
          {id: '2-1', label: '选项1'},
          {id: '2-2', label: '选项2'}
        ]
      ],
      [
        '组名2',
        [
          {id: '2-3', label: '选项3'},
          {id: '2-4', label: '选项4'}
        ]
      ]
    ]
  },
  {
    id: '3',
    label: '展开菜单2',
    // 不分组
    submenu: [
      {id: '3-1', label: '选项1'},
      {id: '3-2', label: '选项2'}
    ]
  },
]

```
> 应为第一层分组如果缩小侧边栏时会存在问题，所以不支持第一层分组

更多的属性，请查阅饿了么的开发文档[menu](http://element.eleme.io/#/zh-CN/component/menu)。
