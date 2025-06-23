import path from 'path'

export default {
  resolve: {
    alias: {
      '@kit': path.resolve(__dirname, './src/scripts/interaction-kit'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@lessons': path.resolve(__dirname, './src/lessons'),
    }
  }
}
