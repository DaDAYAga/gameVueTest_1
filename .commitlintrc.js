module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // 新功能
        'fix',      // 修復 bug
        'docs',     // 文檔更新
        'style',    // 代碼格式（不影響代碼運行的變動）
        'refactor', // 重構（既不增加新功能，也不是修復 bug）
        'perf',     // 性能優化
        'test',     // 增加測試
        'chore',    // 構建過程或輔助工具的變動
        'revert',   // 回退
        'build',    // 構建相關代碼修改
      ],
    ],
    'subject-case': [0], // 不限制 subject 的大小寫
  },
}
