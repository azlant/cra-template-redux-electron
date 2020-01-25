var path = require('path');
var ncp = require('ncp').ncp;

ncp.limit = 16;

var srcPath = 'template/config'
var destPath = './'

console.log('Copying files...');
ncp(srcPath, destPath, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('Copying files complete.');
});