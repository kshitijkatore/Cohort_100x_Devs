// syncronous --> Blocking Operation
// const fs = require('fs');
// console.log("1")

// const result = fs.writeFileSync("./test.txt", "Hey there !");
// console.log(result);

// console.log("2")

// Ayncronous --> Non-Blocking Operation

const fs = require('fs');

console.log("1");
fs.readFile('./test.txt', "utf-8", (ree, result)=>{
    console.log(result);
});

console.log("2");

// Default Thread Pool Size  = 4
// Max thread size depends on your cpus legth

const os = require('os');
console.log(os.cpus().length);
