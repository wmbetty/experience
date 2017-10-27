// 异步读文件
// 'use strict';

// var fs = require('fs');

// fs.readFile('sample.txt', 'utf-8', function (err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// 同步读文件
'use strict';

var fs = require('fs');

var data = fs.readFileSync('text.txt', 'utf-8');
console.log(data);