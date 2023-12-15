<script>
import Home from './components/Home.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    'home': Home,
    'header-component' : Header,
    'footer-component' : Footer
  },
  provide() {
    return {
      apiUrl : 'https://newapi.nathanark.com/api'
    }
  }
}
</script>
<template>
  <header-component/>
  <home/>
  <footer-component/>
</template>
