<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<style>
:root {
  --primary-color: #42b983;
  --secondary-color: #2c3e50;
  --background-color: #1a1a1a;
  --text-color: #ffffff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

button, .btn {
  cursor: pointer;
  transition: all 0.3s ease;
}

button:disabled, .btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
