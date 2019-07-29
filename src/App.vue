<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <MainView />
  </div>
</template>

<script>
import MainView from './components/main-view'

export default {
  name: 'app',
  components: {
    MainView
  }
}
</script>
