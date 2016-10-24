'use strict';

const spawn = require('cross-spawn');

module.exports = function (env) {
  const processEnv = process.env;
  for (const k in processEnv) {
    if (!processEnv.hasOwnProperty(k) || env[k]) {
      continue;
    }
    env[k] = processEnv[k];
  }
  spawn('yarn', process.argv.slice(2), {
    env: env,
    cwd: process.cwd(),
    stdio: 'inherit',
  }).on('exit', function (code) {
    process.exit(code);
  });
};
