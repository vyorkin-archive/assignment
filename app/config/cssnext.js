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
      customMedia: {
        extensions: {
          '--small': '(width >= 360px) and (height >= 480px)',
          '--medium': '(width >= 768px) and (height >= 680px)',
          '--large': '(width >= 1024px)'
        },
        preserve: true,
        appendExtensions: true
      },
      mediaQueriesRange: true,
      import: {
        path: ['src/styles']
      }
    }
  };
}
