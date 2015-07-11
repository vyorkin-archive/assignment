import util from 'util';

export default function(config, argv) {
  const scheme = config.https ? 'https' : 'http';
  const host = process.env.HOST || config.host;
  const port = process.env.PORT || config.port;

  return {
    host: host,
    port: port,
    url: util.format('%s://%s:%d', scheme, host, port)
  };
}
