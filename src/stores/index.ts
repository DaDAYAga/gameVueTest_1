import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

type GamePhase = 'lobby' | 'setup' | 'playing' | 'ended'

export const useGameStore = defineStore('game', () => {
  // State
  const isGameStarted = ref(false)
  const playerCount = ref(0)
  const currentPlayer = ref(1)
  const gamePhase = ref<GamePhase>('lobby')
  
  // Getters
  const isGameReady = computed(() => {
    return playerCount.value >= 2 && playerCount.value <= 4
  })
  
  const currentPhase = computed(() => {
    return gamePhase.value
  })
  
  // Actions
  function startGame() {
    isGameStarted.value = true
    gamePhase.value = 'setup'
  }
  
  function setPlayerCount(count: number) {
    playerCount.value = count
  }
  
  function nextPlayer() {
    currentPlayer.value = (currentPlayer.value % 4) + 1
  }
  
  function setGamePhase(phase: GamePhase) {
    gamePhase.value = phase
  }
  
  return {
    // State
    isGameStarted,
    playerCount,
    currentPlayer,
    gamePhase,
    
    // Getters
    isGameReady,
    currentPhase,
    
    // Actions
    startGame,
    setPlayerCount,
    nextPlayer,
    setGamePhase
  }
})
