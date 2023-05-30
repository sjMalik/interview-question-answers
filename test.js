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

const http = require('http');
const cluster = require('cluster');
const os = require('os');

let numCpu = os.cpus.length;

if(cluster.isMaster){
  numCpu = numCpu === 0 ? 2 : numCpu;
  for(let i = 0; i< numCpu; i++){
    cluster.fork();
  }
  cluster.on('exit', (worker, code, signal)=> {
    cluster.fork();
  })
}else{
  http.Server((req, res)=> {}).listen(3000, ()=> {
    console.log(process.pid)
  });
}