/* eslint-disable no-console */

const chalk = require('chalk');

const divider = chalk.gray('\n-----------------------------------');

const logger = {
  error: err => {
    console.error(chalk.red(err));
  },

  appStarted: (port, host) => {
    console.log(`Server started!`);
    console.log(`
${chalk.bold('Access URL:')}${divider}
Localhost: ${chalk.magenta(`http://${host}:${port}`)}${divider}
${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}
    `);
  },
};

module.exports = logger;
