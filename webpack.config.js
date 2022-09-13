const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    mode: "development",
	entry: {
		home: path.resolve(__dirname, "src/index.js"),
	},

	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
		clean: true,
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname,"dist"),
		},
		port: 3000,
		open: true,
		hot: true,
		compress: true,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.svg$/,
				loader: 'svg-inline-loader'
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				use: [{
					loader: "file-loader",
					options: {
						name: "[name].[ext]",
						outputPath: "img", 
					}
				}]
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			title: "Restaurant",
			template: "./src/template.html",
			favicon: "./src/assets/favicon.png"	
		}),
	]
};
