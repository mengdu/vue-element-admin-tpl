<template>
  <div class="app-aside">
    <div class="app-logo-box">
      <!-- <img :src="logoUrl" class="app-logo" /> -->
      <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="asymmetrik" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="app-logo"><path fill="currentColor" d="M517.5 309.2c38.8-40 58.1-80 58.5-116.1.8-65.5-59.4-118.2-169.4-135C277.9 38.4 118.1 73.6 0 140.5 52 114 110.6 92.3 170.7 82.3c74.5-20.5 153-25.4 221.3-14.8C544.5 91.3 588.8 195 490.8 299.2c-10.2 10.8-22 21.1-35 30.6L304.9 103.4 114.7 388.9c-65.6-29.4-76.5-90.2-19.1-151.2 20.8-22.2 48.3-41.9 79.5-58.1 20-12.2 39.7-22.6 62-30.7-65.1 20.3-122.7 52.9-161.6 92.9-27.7 28.6-41.4 57.1-41.7 82.9-.5 35.1 23.4 65.1 68.4 83l-34.5 51.7h101.6l22-34.4c22.2 1 45.3 0 68.6-2.7l-22.8 37.1h135.5L340 406.3c18.6-5.3 36.9-11.5 54.5-18.7l45.9 71.8H542L468.6 349c18.5-12.1 35-25.5 48.9-39.8zm-187.6 80.5l-25-40.6-32.7 53.3c-23.4 3.5-46.7 5.1-69.2 4.4l101.9-159.3 78.7 123c-17.2 7.4-35.3 13.9-53.7 19.2z"></path></svg>
      <span class="app-name">Management</span>
    </div>
    <div class="app-menu-box">
      <Menu :menus="menus" />
    </div>
  </div>
</template>

<script>
import Menu from './menu'

const menus = [
  { label: 'Dashboard', icon: 'fa fa-dashboard', path: '/admin' },
  { label: 'Introduce', icon: 'fa fa-dot-circle-o', path: '/page1' },
  {
    label: 'GROUP 1',
    type: 'group',
    items: [
      { label: 'User Manger', icon: 'fa fa-user-md', path: '/page1' },
      { label: 'Permission Manger', icon: 'fa fa-tasks', path: '/page2' },
      { label: 'Group Manger', icon: 'fa fa-group', path: '/page3' }
    ]
  },
  {
    label: 'GROUP 2',
    type: 'group',
    items: [
      { label: 'Content Manger', icon: 'fa fa-circle', path: '/test' },
      { label: 'Content Manger', icon: 'fa fa-bomb', path: '/test' },
      { label: 'Content Manger', icon: 'fa fa-circle-o', path: '/test' }
    ]
  },
  {
    label: 'Submenu',
    type: 'submenu',
    open: true,
    icon: 'fa fa-folder-open',
    items: [
      { label: 'Submenu 1', icon: 'fa fa-file-image-o', path: '/test' },
      { label: 'Submenu 2', icon: 'fa fa-book', path: '/test' },
      { type: 'line' },
      { label: 'Submenu 3', icon: 'fa fa-file-word-o', path: '/test' },
      {
        label: 'Submenu',
        type: 'submenu',
        open: false,
        items: [
          { label: 'Submenu 1', icon: 'fa fa-book', path: '/test' },
          { label: 'Submenu 2', icon: 'fa fa-book', path: '/test' },
          { label: 'Submenu 3', icon: 'fa fa-book', path: '/test' }
        ]
      }
    ]
  },
  { type: 'line' },
  { label: 'Github', icon: 'fa fa-github-alt', link: 'https://github.com/mengdu/vue-element-admin-tpl', title: 'Github' },
  { label: 'Element-UI', icon: 'fa fa-external-link-square', link: 'https://element.eleme.cn', title: 'Element-UI' },
  { label: 'About', icon: 'fa fa-meetup', link: 'https://github.com/mengdu', title: 'About Author' }
]

export default {
  components: { Menu },
  data () {
    return {
      menus
    }
  }
}
</script>
