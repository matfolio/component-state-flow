var config = {
   entry: './Main.js',
	
   output: {
      path:'./',
      filename: 'index.js',
   },
	
   watch: true,
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;