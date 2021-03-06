const CracoAlias = require('craco-alias')

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'options',
        baseUrl: './',
        aliases: {
          '@api': './src/api',
          '@assets': './src/assets',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@pages': './src/pages',
          '@reducer': './src/reducer',
          '@style': './src/style',
          '@utils': './src/utils',
          '@contexts': './src/contexts',
        },
      },
    },
  ],
}
