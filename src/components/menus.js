const menus = [
  {id: '0', label: '控制面板', path: '/', icon: 'fa fa-home'},
  // {
  //   id: 1,
  //   label: '用户管理',
  //   path: '/uesr',
  //   icon: 'fa fa-user',
  //   submenu: [
  //     {id: 2, label: '用户列表', path: '/list', icon: 'el-icon-phone'},
  //     {id: 3, label: '联系人', path: '/list', icon: 'el-icon-edit-outline'}
  //   ]
  // },
  // {
  //   id: 'test',
  //   label: '分组菜单',
  //   icon: 'el-icon-menu',
  //   submenu: [
  //     ['组名',
  //       [{id: 'xx1', label: '导航1-0', name: 'c-switch'}]
  //     ],
  //     ['组2',
  //       [{id: 'xx2', label: '导航1-1', path: '/'}]
  //     ]
  //   ]
  // },
  {
    id: 'components',
    icon: 'fa fa-microchip',
    label: 'Components 组件',
    submenu: [
      ['Form 表单', [
          {id: 'f1', name: 'c-button', label: 'Button 按钮'},
          {id: 'f2', name: 'c-switch', label: 'Switch 开关'},
          {id: 'f3', name: 'c-checkbox', label: 'Checkbox 多选框'},
          {id: 'f4', label: 'Radio 单选框'},
          {id: 'f5', name: 'c-input', label: 'Input 输入框'}
      ]],
      ['Notice', [
        {id: 'n1', name: 'c-alert', label: 'Alert 警告'},
        {id: 'n2', name: 'c-loading', label: 'Loading 加载'}
      ]]
    ]
  },
  {
    id: 'pages',
    icon: 'fa fa-pied-piper',
    label: 'Pages 页面',
    submenu: [
      {id: 'p-data-table', name: 'p-data-table', label: 'Table 表格数据'},
      {id: 'p1', name: 'login', label: 'Login 登录'},
      {id: 'p2', name: 'p-login', label: 'Login 登录2'},
      {id: 'p3', name: 'p-register', label: 'Register 注册'},
      {id: 'p4', path: '/404', label: '404'},
      {id: 'p5', path: '/500', label: '500'}
    ]
  },
  {
    id: 'examples',
    icon: 'fa fa-paper-plane',
    label: 'Examples',
    submenu: [
      {id: 'e1', path: '/500', label: 'Vuex 例子'}
    ]
  },
  {
    id: 'test',
    icon: 'fa fa-info',
    label: 'M v1.0'
  }
]

export default menus
