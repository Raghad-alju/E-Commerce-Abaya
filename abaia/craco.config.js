
// "scripts": {
//     "start": "react-scripts start",
//     "build": "react-scripts build",
//     "test": "react-scripts test",
//     "eject": "react-scripts eject"
//   },
module.exports = {
    webpack: {
      configure: webpackConfig => {
        const scopePluginIndex =
          webpackConfig.resolve.plugins.findIndex(
            ({constructor}) =>
              constructor &&
              constructor.name === 'ModuleScopePlugin',
          );
  
        webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);
        return webpackConfig;
      },
    },
    babel: {
      presets: ['@babel/preset-react'],
      loaderOptions: (babelLoaderOptions, {env, paths}) => {
        return babelLoaderOptions;
      },
    },
  };