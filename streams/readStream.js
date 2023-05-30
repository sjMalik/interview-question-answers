const fs = require('fs');

let content = "";

const readStream = fs.createReadStream('./streams/input.txt');

readStream.on('data', (chunk)=> {
    content+= chunk;
});

readStream.on('end', ()=> {
    console.log(content)
});

readStream.on('error', (err)=> {
    console.log(err.stack)
});