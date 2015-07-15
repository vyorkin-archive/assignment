export default function(isProduction, enableSourceMaps) {
  return {
    messages: {
      browser: true,
      console: true
    },
    features: {
      compress: {
        preserveHacks: isProduction,
        removeAllComments: isProduction
      },
      sourcemap: enableSourceMaps,
      calc: true,
      customMedia: true,
      mediaQueriesRange: true,
      import: {
        path: ['src/styles']
      }
    }
  };
}
