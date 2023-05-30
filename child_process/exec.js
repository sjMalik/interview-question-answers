const {exec} = require('child_process');

exec('where *', (err, output)=> {
    if(err){
        console.log(err.stack);
        return;
    }
    console.log(output);
})