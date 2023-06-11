// function getNthMax(arr, n) {
//   // Sort the array in descending order
//   const sortedArr = arr.sort((a,b)=> b-a);
//   // Remove duplicates from array
//   const finalArr = [...new Set(sortedArr)];
//   return finalArr[n-1];
// }

// console.log(getNthMax([100, 200, 200, 300, 400], 4));   // 100

// const fs = require('fs');
// const util = require('util');

// const readfile = util.promisify(fs.readFile);

// async function readFile(){
//     try{
//         const data = await readfile('./README.md');
//         console.log(data);
//     }catch(err){
//         console.log(err)
//     }
// }

// readFile();

// function getPromise(flag) {
//   return new Promise((resolve, reject)=> {
//       if(flag){
//           resolve('Its Resolved')
//       }else{
//           const err = new Error('Something error happened')
//           reject(err)
//       }
//   })
// }

// getPromise(false)
//   .then(result=> console.log(result))
//   .catch(err=> console.log(err))

// const expect = require('chai').expect;
// const foo = 'bar';
// const a = {b: 1};

// describe('Unit Testing Example', ()=> {
//     before(()=> {
//         console.log('It will execute before test start')
//     });
//     beforeEach(()=> {
//         console.log('It will execute before each test start')
//     });

//     it('2 + 2 will be equal to 4', ()=> {
//         expect(2+2).equal(4);
//     });

//     it('String match', ()=> {
//         expect(foo).to.be.a('string');
//         expect(foo).to.equal('bar');
//         expect(foo).to.have.length(3);
//     });

//     it('Testing Object', ()=> {
//         expect(a).to.have.property('b')
//     });

    
//     afterEach(()=> {
//         console.log('It will execute after each test')
//     });
//     after(()=> {
//         console.log('It will execute after all test')
//     });
// })

// function mainFunction(callback) {
//   callback('Operation completed')
// }

// mainFunction(function (result) {
//   console.log("Result: ", result);
// })

// const http = require('http');
// const cluster = require('cluster');
// const os = require('os');

// let numCpu = os.cpus.length;

// if(cluster.isMaster){
//   numCpu = numCpu === 0 ? 2 : numCpu;
//   for(let i = 0; i< numCpu; i++){
//     cluster.fork();
//   }
//   cluster.on('exit', (worker, code, signal)=> {
//     cluster.fork();
//   })
// }else{
//   http.Server((req, res)=> {}).listen(3000, ()=> {
//     console.log(process.pid)
//   });
// }


// const http = require('http');
// const host = 'localhost';
// const port = 3000;

// const server = http.createServer((req, res)=> {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// })

// server.listen(port, host, ()=> {
//   console.log(`Server running @ http://localhost:3000`)
// });


// const express = require('express');
// const host = 'localhost';
// const port = 3000;

// const app = express();

// app.get('/', (req, res)=> {
//   res.status(200).send('Hello World')
// })

// app.listen(port, host, ()=> {
//   console.log(`Server running @ http://localhost:3000`)
// })

// const fs = require('fs');

// try{
//     const data = fs.readFileSync('./input.txt');
// }catch(err){
//     console.log(err)
// }
// console.log('Some important code to execute');

// fs.readFile('./input.txt', (err, data)=> {
//   if(err){
//     console.log(err);
//     return
//   }
//   console.log(data)
// });
// console.log('Some important code to execute');

// const util = require('util');

// const readfile = util.promisify(fs.readFile);

// readfile('./input.txt').then(data=> console.log(data))
//   .catch(err=> console.log(err.stack));
// (async ()=> {
//   try{
//     const data = await readfile('./input.txt');
//   }catch(err){
//     console.log(err.stack)
//   }
// })();

// console.log('Some important code to execute');

// const {spawn} = require('child_process');

// const child = spawn('dir', ['']);

// child.stdout.on('data', (data)=> {
//   console.log(data);
// });

// child.on('error', (err)=> {
//   console.log(err.stack)
// })

// const employee = {
//   name: 'Surajit'
// }

// function invite(greeting1, greeting2) {
//   console.log(`${greeting1} ${this.name} ${greeting2}`)
// }

// invite.call(employee, 'Hello', 'How are you?');
// invite.apply(employee, ['Hello', 'How are you?']);
// invite.bind(employee, 'Hello', 'How are you?')();

// function getPromise(flag) {
//   return new Promise((resolve, reject)=> {
//     if(flag){
//       resolve('Resolved')
//     }else{
//       const err = new Error('Rejected');
//       reject(err)
//     }
//   })
// }

// getPromise(false)
//   .then(data=> console.log(data))
//   .catch(err=> console.log(err.message));

// async function getAsyncPromise(flag) {
//   if(flag) return 'Resolved';
//   else throw new Error('rejected')
// }

// (async ()=> {
//   try{
//     const data = await getAsyncPromise(false);
//   }catch(err){
//     console.log(err.message)
//   }
// })();

// const jwt = require('jsonwebtoken');

// const payload = {
//   name,
//   email,
//   org_id
// };

// const token = jwt.sign(payload, JWT_SECRET, {
//   expiresIn: JWT_TTL
// });

// jwt.verify(token, JWT_SECRET, (err, decoded)=> {
//   if(!err){
//     console.log(decoded)
//   }
// })

const numbers = [1,2,3,4,5];
const sumOfAllNums = numbers.reduce((accm, curr)=> accm + curr);
console.log(sumOfAllNums)