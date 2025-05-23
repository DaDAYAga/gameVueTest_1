<template>
  <div class="game-container">
    <h1>遊戲畫面</h1>
    <p>遊戲內容將在這裡顯示</p>
    <router-link to="/" class="btn back-btn">返回首頁</router-link>
  </div>
</template>

<script setup lang="ts">
// 遊戲邏輯將在這裡實現
</script>

<style scoped>
.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1a1a1a;
  color: #fff;
  text-align: center;
  padding: 20px;
}

h1 {
  color: #42b983;
  margin-bottom: 1rem;
}

.back-btn {
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s;
}

.back-btn:hover {
  background-color: #34495e;
}
</style>
