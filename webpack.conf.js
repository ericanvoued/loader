let path = require('path');


module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    devtool:'source-map',
    module:{
        rules:[
            {
                test:/\.js$/,
                include:path.resolve(__dirname,'src'),
                use:{
                    loader:'bebel-loader',//@babel/core  @babel/preset-env
                    options:{
                        "presets":['@babel/preset-env']
                    }
                }
            },{
                test:/\.less$/,
                use:['style-loader','css-loader','css-loader']
            },{
                test:/\.jpg|\.png|\.gif$/,
                // use:['file-loader']
                use:{
                    loader:"url-loader",
                    options:{
                        limit:800*1024
                    }
                }
            }
        ]
    },
    resolveLoader:{//解析loader规则
        module:[
            path.resolve(__dirname,'loaders'),//加载自己的loader
            path.resolve(__dirname,'node_modules')
        ]
    },
    plugins:[
        new HtmlWebpackPlugin
    ]

}