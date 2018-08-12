const express = require('express');
const logger = require('./logger');

const host = 'localhost';
const port = 3010;
const setup = require('./frontendMiddleware');
const { resolve } = require('path');
const app = express();

setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

app.listen(port, host, async err => {
  if (err) {
    return logger.error(err.message);
  }

  logger.appStarted(port, host);
});
