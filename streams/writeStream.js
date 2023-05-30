const fs = require('fs');

const writeStream = fs.createWriteStream('./streams/output.txt');

writeStream.write('Hi Surajit', 'utf8');

writeStream.end();

writeStream.on('finish', ()=> {
    console.log('Writing Completed')
})