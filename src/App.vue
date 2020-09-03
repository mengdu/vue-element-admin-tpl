<template>
  <div id="app" :class="[env && 'env-' + env]">
    <div class="watermark-bg"
      v-if="watermark"
      :style="{
        'background-image': 'url(' + watermark + ')'
      }"></div>
    <MainView />
  </div>
</template>

<script>
import MainView from './components/main-view'
import { mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    MainView
  },
  computed: {
    ...mapState(['watermark', 'env'])
  }
}
</script>
