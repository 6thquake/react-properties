const Properties = require('./Properties');
const Json = require('./Json');
const util = require('util');

const target = process.env.NODE_ENV || 'development';

module.exports = {
  loadProperties: function(dir, options) {
    return Properties(dir, options);
  },

  loadJson: function(dir) {
    return Json(dir);
  },

  load: function(dir, options) {
    let props = {};

    util._extend(props, this.loadJson(dir));
    util._extend(props, this.loadProperties(dir, options));

    return props;
  },
};
