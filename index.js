#!/usr/bin/env node

'use strict';

const env = require('./env');

// can not put inside run, ENOENT
require('./run')(env);

