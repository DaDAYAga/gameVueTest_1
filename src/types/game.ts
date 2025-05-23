// 玩家類型
export interface Player {
  id: number
  name: string
  health: number
  position: [number, number]
  role?: PlayerRole
  isDungeonMaster: boolean
}

// 玩家角色類型
export type PlayerRole = 'warrior' | 'mage' | 'archer' | 'healer' | 'dungeonMaster'

// 遊戲狀態
export type GamePhase = 'lobby' | 'setup' | 'playing' | 'ended'

// 六邊形地圖坐標
export interface HexCoord {
  q: number
  r: number
  s: number
}

// 遊戲卡片
export interface Card {
  id: string
  name: string
  description: string
  type: 'attack' | 'defense' | 'utility' | 'movement'
  cost: number
  effect: () => void
}

// 遊戲狀態
export interface GameState {
  players: Player[]
  currentPlayer: number
  phase: GamePhase
  round: number
  board: any[][] // 這裡可以根據需要定義更具體的類型
}
