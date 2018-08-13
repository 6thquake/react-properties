'use strict';

const properties = require('./Read');
const fs = require('fs');
const path = require('path');
const util = require('util');

const _options = {
  path: true,
  include: true,
  sections: true,
  variables: true,
  namespaces: true,
  separators: '=',
  comments: [';', '#'],
};

const target = process.env.NODE_ENV || 'development';

module.exports = (dir, opts) => {
  let props = {},
    env1 = {},
    env2 = {},
    env3 = {},
    env4 = {},
    filename = null;

  let options = {};
  util._extend(options, _options);
  util._extend(options, opts);

  //NODE_ENV can be "production", "development" or "test"
  //Load specific configuration depending on the environment
  filename = path.join(dir, '.env.' + target + '.local');
  if (fs.existsSync(filename)) {
    env1 = properties(filename, options);
  }

  filename = path.join(dir, '.env.' + target);
  if (fs.existsSync(filename)) {
    env2 = properties(filename, options);
  }

  //Pass the specific configuration as external variables to the common
  //configuration
  // options.vars = env1;

  filename = path.join(dir, '.env.local');
  if (fs.existsSync(filename)) {
    env3 = properties(filename, options);
  }

  filename = path.join(dir, '.env');
  if (fs.existsSync(filename)) {
    env4 = properties(filename, options);
  }

  util._extend(props, env4);
  util._extend(props, env3);
  util._extend(props, env2);
  util._extend(props, env1);

  return props;
};
