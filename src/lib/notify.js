/* eslint no-console: 0 */

const chalk = require('chalk');

const sample = 'This is some very long text that should go beyound 80 characters and not throw error';

const notify = {
  error: (msg) => { console.log(chalk.red(`Error ${msg}`)); },
  warn: (msg) => { console.log(chalk.yellow(msg)); },
  showSample: () => { console.log(sample); }
};

module.exports = notify;
