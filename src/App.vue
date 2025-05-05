<template>
  <NavCompoenent />
  <router-view></router-view>
</template>

<script>
import NavCompoenent from './components/NavComponent.vue' 
export default {
  name: 'App',
  components: {
    NavCompoenent
  }
}
</script>

<style>
.app {
  font-family: 'Crimson Text', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  min-height: 100vh;
  transition: all 0.3s ease;
}

.dark {
  background-color: #1a1a1a;
  color: #e0e0e0;
}

.light {
  background-color: #f5f5f5;
  color: #2c3e50;
}

</style>
