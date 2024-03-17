// syncronous function
/*
function findSum(n){
    let ans = 0;
    for(let i = 0; i<n; i++){
        ans = ans + i;
    }
    return ans;
}
console.log(findSum(1000));
*/

/*
function findSum(n){
    let ans = 0;
    for(let i = 0; i< n; i++){
        ans = ans + i;
    }
    return ans;
}
function findSum100(){
    console.log(findSum(100));
}
setTimeout(findSum100,1000);
console.log("Hello world");
*/

/*
function syncSleep(){
    let a = 1;
    for(let i = 0; i< 10000; i++){
        a++;
    }
}
syncSleep();
console.log("Xitij");
*/

// common async function

/*
const fs = require("fs");
fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data);
})
*/

// promises --> ugly waay

/*
const fs = require('fs');
function xitijReadFile(cb){
    fs.readFile("a.txt", 'utf-8', function(err, data){
        cb(data);
    })
}

function onData(data){
    console.log(data)
}
xitijReadFile(oneDone); 
*/

// using promises
/*
function xitijReadFile(){
    console.log("read file");
    return new Promise(function(resolve){
        FileSystem.readFile("a.text", "utf-8", function(err, data){
            resolve(data);
        });
        console.log("after resole");

    })
}

function onDone(data){
    console.log(data);
}
xitijReadFile().then(onDone);
*/

/*
var d = new Promise(function(resolve){
    resolve("foo..");
})
function callback(){
    console.log(d);
}
d.then(callback)
*/

/*
// implimenting promise function
function xitijReaadFile(){
    let p = new Promise(function(resolve){
        resolve("Hi there..");
    })
}
const value = xitijReaadFile();
value.then(function(){
    console.log(data);
})

// simple function 
function AsyncFunction(callback){
    setTimeout(callback, 2000);
}

AsyncFunction(function(){
    console.log("Hello..");
});
*/

//Normal syntax

function AsyncFunction(){
    let p = new Promise(function(resolve){
        resolve("Hi There...");
    });
    return p;
}

function main(){
    AsyncFunction().then(function(value){
        console.log(value);
    });
}
main();

// Async/ Await syntax

function AsyncFuction(){
    let p = new Promise(function(resolve){
        resolve("HI there..");
    }); 
    return p;
}

async function main(){
    const value = await AsyncFuction();
    console.log(value);
}
main();