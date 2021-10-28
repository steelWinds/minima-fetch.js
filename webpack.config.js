import webpack from 'webpack';
import path from 'path';
import { cwd } from 'process';
import getWebpackLogger from 'webpack-log'; 
import ESlintWebpackPlugin from 'eslint-webpack-plugin';

const log = getWebpackLogger(
    {
        name: 'webpack-kit'
    }
);
const __dirname = cwd();
const progressHandler = () => {
    let previousLogs = new Set();
    let progressLog = getWebpackLogger({
        name: '>>>'
    });

    return (percentage, message, ...args) => {
        let currentLog = message;

        if (previousLogs.has(currentLog)) {
            return;
        } 

        else if (currentLog === '') {
            return;
        }

        progressLog.warn(currentLog);

        previousLogs.add(currentLog);
    };
};

let config = {
    entry: {
        'minima': path.resolve(__dirname, './src/minima.js')
    },

    stats: 'errors-warnings',

    module: {
        rules: [
            {
                test: /.jsx?$/,
                use: 'babel-loader'
            },
            {
                test: /.tsx?$/,
                use: [
                    'babel-loader',
                    'ts-loader'
                ]
            },
            {
                test: /.vue$/,
                use: 'vue-loader'
            },
            {
                test: /.(css|sass)$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ]
    },

    devServer: {
        static: {
            directory: path.resolve(__dirname, './dist'),
            watch: true,
        },
        historyApiFallback: true,
        port: 9000,
        open: true,
        hot: true,
        watchFiles: [
            path.resolve(__dirname, 'src/**/*.js'),
            path.resolve(__dirname, 'src/**/*.vue'),
            path.resolve(__dirname, 'src/**/*.css'),
            path.resolve(__dirname, 'src/**/*'),
        ]
    },

    plugins: [
        new webpack.ProgressPlugin(progressHandler()),
        new ESlintWebpackPlugin(),
    ],

    optimization: {
        minimize: false
    },

    output: {
        path: path.resolve(__dirname, './dist/'),
        publicPath: '/dist/',
        filename: '[name].build.js',
    }
};

export default (env, args) => {
    let currentMode = args.mode;

    if (currentMode === 'development') {
        log.info('Start dev-server, happy coding!');
    }

    if (currentMode === 'production') {
        log.info('Build your project for production');

        console.log();

        config.output.clean = {
            dry: true
        };
    }

    return config;
};
