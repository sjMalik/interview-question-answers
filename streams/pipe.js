const fs = require('fs');

const readStream = fs.createReadStream('./streams/input.txt');
const writeStream = fs.createWriteStream('./streams/output.txt');

readStream.pipe(writeStream);