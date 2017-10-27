'use strict';

var fs = require('fs');

var data = 'Hello, Node.js';
fs.writeFile('text.txt', data, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok.');
    }
});