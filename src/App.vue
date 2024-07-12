
<script setup>
import {  RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div>
    <Navbar />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

main {
  padding: 1rem;
  background-color: #f1f1f1;
}
</style>