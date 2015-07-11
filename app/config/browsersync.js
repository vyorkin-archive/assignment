export default function(config, argv) {
  const host = process.env.HOST || config.host;
  const port = process.env.PORT || config.port;

  return {
    logPrefix: config.appName,
    logLevel: 'debug',
    logConnections: true,
    notify: true,
    // Run as an https by setting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser
    https: config.https,
    proxy: host + ':' + port,
    ghostMode: {
      clicks: true,
      forms: true,
      scroll: true
    },
    browser: 'google chrome',
    startPath: '/',
    reloadOnRestart: true,
    reloadDebounce: 100,
    injectChanges: true,
    ui: {
      port: 8080
    },
    open: config.openInBrowser || false
  };
}
