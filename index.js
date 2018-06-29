import express from 'express';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import path from 'path';

import routes from './config/route';

require('dotenv').config();

const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

console.log(env);

const app = express();
const router = express.Router();

const indexPath = path.join(__dirname, './dist/index.html');

routes(router);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (env === 'development') {
  const webpackConfig = require('./webpack.config');
  const compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}

app.use(router);
app.use(express.static('dist'));
app.use('/*', (req, res) => {
  res.sendFile(indexPath);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


export default app;
