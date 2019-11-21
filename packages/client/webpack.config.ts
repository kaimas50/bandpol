import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
    mode: 'production',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    entry: './app.tsx',
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, '../../dist/client'),
        filename: 'bandpol.bundle.js',
    },
};

export default config;
