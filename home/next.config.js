const { withFederatedSidecar } = require('@module-federation/nextjs-ssr');
// this enables you to use import() and the webpack parser
// loading remotes on demand, not ideal for SSR
const remotes = isServer => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    home: `home@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
    orders: `orders@http://localhost:3002/_next/static/${location}/remoteEntry.js`,
    itemcatalogue: `itemcatalogue@http://localhost:3000/_next/static/${location}/remoteEntry.js`,
  };
};
module.exports = withFederatedSidecar(
  {
    name: 'home',
    filename: 'static/chunks/remoteEntry.js',
    exposes: {
      './nav': './components/nav.js',
      './home': './async-pages/index.js',
      './pages-map': './pages-map.js',
    },
    remotes,
    shared: {
      react: {
        // Notice shared are NOT eager here.
        requiredVersion: false,
        singleton: true,
      }
    },
  },
  {
    experiments: {
      flushChunks: true,
      hot: true,
    },
  },
)({
  webpack5: true,
  webpack(config, options) {
    
    config.module.rules.push({
      test: /_app.js/,
      loader: '@module-federation/nextjs-ssr/lib/federation-loader.js',
    });

    config.externals.unshift(({ context, request }, callback) => {
      // Work-around for Prisma "Could not open datamodel file"  error
      if (request === 'prisma/client') {
        return callback(null, `commonjs ${prismaClientPath}`);
      }
      if (request === './runtime' && context === prismaClientPath) {
        return callback(null, `commonjs ${prismaClientPath}/runtime`);
      }
      callback();
    });

    return config;
  },
});
