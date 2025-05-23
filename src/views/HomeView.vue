<template>
  <div class="home">
    <h1>六邊形戰棋遊戲</h1>
    <div class="actions">
      <button @click="startNewGame" class="btn primary">開始新遊戲</button>
      <button @click="joinGame" class="btn secondary">加入遊戲</button>
      <button @click="showTutorial" class="btn tertiary">教學</button>
    </div>
    <div class="version">版本: 0.1.0</div>
  </div>
</template>

<script setup lang="ts">import { useRouter } from 'vue-router';

const router = useRouter()

const startNewGame = () => {
  // TODO: 實現開始新遊戲邏輯
  router.push('/game')
}

const joinGame = () => {
  // TODO: 實現加入遊戲邏輯
  router.push('/game')
}

const showTutorial = () => {
  // TODO: 實現教學邏輯
  alert('教學功能開發中...')
}
</script>

<style scoped>
.home {
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
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #42b983;
}

.actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 300px;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
}

.primary {
  background-color: #42b983;
  color: white;
}

.primary:hover {
  background-color: #3aa876;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(66, 185, 131, 0.3);
}

.secondary {
  background-color: #2c3e50;
  color: white;
}

.secondary:hover {
  background-color: #34495e;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(44, 62, 80, 0.3);
}

.tertiary {
  background-color: transparent;
  color: #42b983;
  border: 2px solid #42b983;
}

.tertiary:hover {
  background-color: rgba(66, 185, 131, 0.1);
  transform: translateY(-2px);
}

.version {
  position: absolute;
  bottom: 20px;
  right: 20px;
  color: #666;
  font-size: 0.9rem;
}
</style>
