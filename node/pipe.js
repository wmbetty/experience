'use strict';

var fs = require('fs');

var rs = fs.createReadStream('simple.txt');
var ws = fs.createWriteStream('copied.txt');

rs.pipe(ws);