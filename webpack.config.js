const { withModuleFederationPlugin, shareAll } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  remotes: {
    dashboard: "http://localhost:4201/remoteEntry.js",
    reports: "http://localhost:4202/remoteEntry.js",

    // ← CORRECTO
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  }
});
