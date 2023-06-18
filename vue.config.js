
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
};

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//     .BundleAnalyzerPlugin;
//     module.exports = {
//         configureWebpack: {
//             plugins: [new BundleAnalyzerPlugin()]
//         }
//    };
