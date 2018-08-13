const fs = require('fs');
const path = require('path');
const util = require('util');

function readText(pathname) {
  let bin = fs.readFileSync(pathname);

  if (bin[0] === 0xef && bin[1] === 0xbb && bin[2] === 0xbf) {
    bin = bin.slice(3);
  }

  return bin.toString('utf-8');
}

const target = process.env.NODE_ENV || 'development';

module.exports = dir => {
  let props = {};

  let packagePath = path.join(dir, 'package.json');
  if (fs.existsSync(packagePath)) {
    props = util._extend(props, JSON.parse(readText(packagePath)));
  }

  let localPath = path.join(dir, 'local.json');
  if (fs.existsSync(localPath)) {
    props = util._extend(props, JSON.parse(readText(localPath)));
  }

  return props;
};
