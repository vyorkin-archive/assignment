export default function(isProduction, enableSourceMaps) {
  return {
    sourcemap: enableSourceMaps,
    messages: {
      browser: true,
      console: true
    },
    features: {
      calc: true,
      customMedia: {
        extensions: {
          '--small': '(width >= 360px) and (height >= 480px)',
          '--medium': '(width >= 768px) and (height >= 680px)',
          '--large': '(width >= 1024px)'
        },
        preserve: true,
        appendExtensions: true
      }
    }
  };
}
