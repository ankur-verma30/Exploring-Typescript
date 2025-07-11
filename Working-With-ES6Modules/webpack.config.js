const path=require('path');
module.exports={
    mode:'development',
    entry:'./src/app.ts',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist'),
        publicPath:'/dist/'
    },
    devtool:'inline-source-map',
    module:{
        rules:[
            {
                test:/\.ts$/,
                use:'ts-loader',
                exclude:/node_modules/,
            }
        ]
    },
    devServer:{
       static:{
        directory:path.resolve(__dirname,'./')
       } 
    },
    resolve: {
    extensions: ['.ts', '.js'],
}
}