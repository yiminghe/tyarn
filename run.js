'use strict';

const spawn = require('cross-spawn');
const path = require('path');

const v = (require('child_process').execSync('yarn -v', {
  encoding: 'utf-8'
}));

const cwd = process.cwd();

const v1 = v.startsWith('1.');

const yaml = require('js-yaml');
const fs = require('fs');

module.exports = function (env, registry) {
  const processEnv = process.env;
  let { yarn_npm_Registry_Server } = processEnv;
  const ymlPath = path.join(cwd, '.yarnrc.yml');
  if (!v1 && !yarn_npm_Registry_Server && fs.existsSync(ymlPath)) {
    const doc = yaml.load(fs.readFileSync(ymlPath, 'utf8')) || {};
    yarn_npm_Registry_Server = doc.npmRegistryServer;
  }
  if (registry) {
    if (v1) {
      env.yarn_registry = registry;
    } else {
      env.yarn_npm_Registry_Server = yarn_npm_Registry_Server || registry;
    }
  }
  if (!v1) {
    console.log('npmRegistryServer:', env.yarn_npm_Registry_Server);
  }
  spawn('yarn', process.argv.slice(2), {
    env: {
      ...processEnv,
      ...env,
    },
    cwd: process.cwd(),
    stdio: 'inherit',
  }).on('exit', function (code) {
    process.exit(code);
  });
};
