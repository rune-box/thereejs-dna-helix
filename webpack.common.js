const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      // {
      //   test: /\.svg$/,
      //   type: 'asset/inline',
      //   generator: {
      //     dataUrl: content => {
      //       content = content.toString();
      //       return svgToMiniDataURI(content);
      //     }
      //   }
      // }
      {
        test: /\.glsl$/,
        loader: 'raw-loader'
      },
      {
        test: /\.fs$/,
        loader: 'raw-loader'
      },
      {
        test: /\.vs$/,
        loader: 'raw-loader'
      }
    ],
    // loaders: [
    //   {
    //     test: /\.glsl$/,
    //     loader: 'webpack-glsl'
    //   }
    // ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    fallback: {
      //buffer: require.resolve("buffer/"),
      //crypto: require.resolve("crypto-browserify"),
      //http: require.resolve("stream-http"),
      //https: require.resolve("https-browserify"),
      //os: require.resolve("os-browserify/browser"),
      //stream: require.resolve("stream-browserify"),
      //url: require.resolve("url/")
    }
  },
  optimization: {
    nodeEnv: false
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'DNA Helix',
    }),
    // new webpack.ProvidePlugin({
    //   Buffer: ['buffer', 'Buffer'],
    // }),
    new webpack.DefinePlugin({
      // 'process.env.production': JSON.stringify(process.env.production),
      // 'process.env.development': JSON.stringify(process.env.development),
      process: {env: {}}
    }),
    //new webpack.EnvironmentPlugin("production", "development"),
  ],
  externals: {
  },
  output: {
    filename: 'dna-helix.js',
    path: path.resolve(__dirname, './dist'),
    library: 'DNAHelix',
    libraryExport: 'default',
    libraryTarget: 'umd',
  },
};