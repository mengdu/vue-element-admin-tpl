const menus = [
  {id: '0', label: '控制面板', path: '/', icon: 'fa fa-dashboard'},
  {
    id: 'components',
    icon: 'fa fa-microchip',
    label: '组件',
    submenu: [
      {
        id: 'test',
        label: '二级测试',
        icon: 'fa fa-hand-o-up',
        submenu: [
          {
            id: 'test',
            label: '二级测试',
            icon: 'fa fa-hand-o-up'
          }
        ]
      },
      ['Form 表单', [
        {id: 'f1', name: 'c-button', label: 'Button 按钮', icon: 'fa fa-hand-o-up'},
        {id: 'f2', name: 'c-switch', label: 'Switch 开关', icon: 'fa fa-square-o'},
        {id: 'f3', name: 'c-checkbox', label: 'Checkbox 多选框', icon: 'fa fa-check-square'},
        // {id: 'f4', label: 'Radio 单选框', icon: 'fa fa-dot-circle-o'},
        {id: 'f5', name: 'c-input', label: 'Input 输入框', icon: 'fa fa-pencil'},
        {id: 'f6', name: 'c-keyboard', label: '虚拟键盘', icon: 'fa fa-keyboard-o'}
      ]],
      ['Notice', [
        {id: 'n1', name: 'c-alert', label: 'Alert 警告', icon: 'fa fa-info'},
        {id: 'n2', name: 'c-loading', label: 'Loading 加载', icon: 'fa fa-circle-o-notch'}
      ]],
      ['Other', [
        {id: 'c-dropdown', name: 'c-dropdown', label: 'Dropdown'},
        {id: 'c-navbar', name: 'c-navbar', label: 'Navbar'},
        {id: 'c-container', name: 'c-container', label: '栅格布局'}
      ]]
    ]
  },
  {
    id: 'pages',
    icon: 'fa fa-circle-o',
    label: 'Pages 页面',
    submenu: [
      {id: 'p-data-table', name: 'p-data-table', label: 'Table 表格数据'},
      {id: 'cnode', name: 'cnode', label: 'Cnode社区'},
      {id: 'p1', name: 'login', label: 'Login 登录'},
      {id: 'p2', name: 'p-login', label: 'Login 登录2'},
      {id: 'p3', name: 'p-register', label: 'Register 注册'},
      {id: '400', path: '/404', label: '404'},
      {id: '500', path: '/500', label: '500'}
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
    id: 'version',
    icon: 'fa fa-meetup',
    label: '应用'
  }
]
export default menus
