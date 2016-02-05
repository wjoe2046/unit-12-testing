var express = require('express');
var webpack = require('webpack');
var path = require('path');
 
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var webpackConfig = require('./webpack.dev.config');
 
var app = express();
 
var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(
  compiler, 
  { publicPath: webpackConfig.output.publicPath }
));
app.use(webpackHotMiddleware(compiler));
app.use(express.static(path.join(__dirname, 'client')));

require('./server/routes/apiRoutes')(app);

app.listen(3000);
