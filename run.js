'use strict';

const spawn = require('cross-spawn');

const v = (require('child_process').execSync('yarn -v', {
  encoding: 'utf-8'
}));

const v1 = v.startsWith('1.');

module.exports = function (env, registry) {
  if (registry) {
    if (v1) {
      env.yarn_registry = registry;
    } else {
      env.yarn_npm_Registry_Server = registry;
      // env.yarn_node_linker = 'node-modules';
      // env.yarn_pnp_mode = 'loose';
    }
  }
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
