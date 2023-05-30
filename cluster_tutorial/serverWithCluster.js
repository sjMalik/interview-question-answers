const express = require('express');
const cluster = require('cluster');
const os = require('os');

const app = express();
// Number of cores present inside our porcessor
let numCpu = os.cpus.length;
// console.log('Number of Cores ', numCpu);

app.get('/', (req, res)=> {
    for(let i=0; i< 1e8; i++){
        // Some long running tasks
    };

    // Cluster module uses the round robin approach
    // First worker server first, then next.. then it will go again to first when reach end
    res.status(200).send(`Ok... ${process.pid}`);
    
    // Whichever worker will respond to request we need to kill that worker
    // cluster.worker.kill();
});

/**
 * Use cluster module to check whether the process is master process or not. If its master process then we'll simply fork a new worker process
 * and then we'll start listening inside the worker process. Master process wont be listening for any request but only the worker processes would be listening some port
 */
if(cluster.isMaster) {
    // Create as many workers as the number of cpus present inside our processor
    // child_process.fork() method will create workers
    // If you have a single core cpu then instead of numCPU you  can provide numbers more than 1
    numCpu = 3;
    for(let i = 0; i < numCpu; i++){
        cluster.fork();
    }
    // If any worker died we will listen this event and print
    cluster.on('exit', (worker, code, signal)=> {
        console.log(`Worker ${worker.process.pid} died;`);
        // As soon as a worker is killed or it has crashed for any reason then a new instance of that worker will be initiallized
        // And we always have our instances up and runnning
        cluster.fork();
    })
}else{
    // Here we have the worker processes
    // The workers will share the same port dont need to create different port for different workers
    app.listen(3000, ()=> console.log(`Server ${process.pid} @ http://localhost:3000`))
}

// app.listen(3000, ()=> {
//     console.log('Server Running')
// })