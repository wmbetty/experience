// const crypto = require('crypto');

// const hash = crypto.createHash('md5');

// // 可任意多次调用update():
// hash.update('Hello, world!');
// hash.update('Hello, nodejs!');

// console.log(hash.digest('hex'));

const crypto = require('crypto');

const hmac = crypto.createHmac('sha256', 'secret-key');

hmac.update('Hello, world!');
hmac.update('Hello, nodejs!');

console.log(hmac.digest('hex'));