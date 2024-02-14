module.exports = function override(config, env) {
    // Add polyfills for Dropbox SDK dependencies and other Node.js core modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      crypto: require.resolve('crypto-browserify'),
      util: require.resolve('util/'),
      stream: require.resolve('stream-browserify')
    };
  
    return config;
  };