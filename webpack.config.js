module.exports = {
    entry: './src/js/index.js',//ビルドの起点となるファイルの設定
  
    output: {
      path: '/js', //出力先のパス
      filename: "bundle.js"　//出力先のファイル
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node-modules/,
                loader: 'babel-loader',
                query: {
                    presets: [["@babel/preset-env"],['@babel/react']]
                }
            }
        ]
    }
  };