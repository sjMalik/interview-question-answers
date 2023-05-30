const {spawn} = require('child_process');

const child = spawn('where', ['*']);

child.stdout.on('data', (data)=> {
    console.log(data);
});

child.on('error', (err)=> {
    console.log(err.stack)
});

child.on('exit', (code, signal)=> {
    if(code) console.log('Process exit with code ', code);
    if(signal) console.log('Process exit with signal ', signal);
    console.log('👍👍')
})