#!/usr/bin/env node

'use strict';

const env = require('./env');

const registry = 'https://registry.npmmirror.com';
// can not put inside run, ENOENT
require('./run')(env, registry);

