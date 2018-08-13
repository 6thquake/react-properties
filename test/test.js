const Properties = require('../src');

const path = require('path');

var rootPath = path.join(path.dirname(__filename), '../');

const target = process.env.NODE_ENV || 'development';

console.log('------properties------');
console.log(Properties.loadProperties(rootPath));
console.log('------properties------\n');

console.log('------json------');
console.log(Properties.loadJson(rootPath));
console.log('------json------\n');

console.log('------all------');
console.log(Properties.load(rootPath));
console.log('------all------\n');
