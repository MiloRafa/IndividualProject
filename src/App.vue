<template>
  <div id="app">
    <div class="container">
      <pp-header></pp-header>
    </div>

    <div class="container">
      <router-view></router-view>
    </div>

    <div class="container">
      <pp-footer></pp-footer>
    </div>

  </div>
</template>

<script>
  import Vue from 'vue'
  import BootstrapVue from 'bootstrap-vue'

  Vue.use(BootstrapVue);
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import Footer from './components/Footer.vue'
  import Header from './components/Header.vue'
    export default {
    components: {
      ppHeader: Header,
      ppFooter: Footer
    }
  }

</script>

<style>

</style>
