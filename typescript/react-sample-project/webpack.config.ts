import * as path from "path";
import * as webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";

const config: webpack.ConfigurationFactory = (env, argv) => {
    const isDevelopmentMode = argv.mode === "development";

    return {
        mode: "development",
        entry: ["react-hot-loader/patch", path.resolve(__dirname, "./src/index.tsx")],
        output: {
            path: path.resolve(__dirname, "dist/"),
            filename: "bundle.js"
        },
        devtool: "source-map",
        resolve: {
            modules: ["node_modules"],
            alias: {
                "react-dom": "@hot-loader/react-dom"
            },
            extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
        },
        module: {
            rules: [
                {
                    test: /\.(j|t)s(x)?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "ts-loader",
                    }
                },
                {
                    enforce: "pre",
                    test: /\.ts(x?)$/,
                    loader: "source-map-loader"
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                hmr: isDevelopmentMode,
                                reloadAll: true,
                            }
                        },
                        {
                            loader: "css-loader",
                        }
                    ],
                }
            ]
        },
        devServer: {
            host: "localhost",
            contentBase: path.resolve(__dirname, "dist/"),
            port: 8080,
            inline: true,
            open: true,
            hot: true,
        },
        optimization: {
            minimizer: [new OptimizeCSSAssetsPlugin({})]
        },
        plugins: [
            new ForkTsCheckerWebpackPlugin(),
            new webpack.NamedModulesPlugin(),
            new HtmlWebpackPlugin({ template: "./src/index.html" }),
            new MiniCssExtractPlugin({ filename: "./css/style.css" }),
        ]
    };
}

export default config;