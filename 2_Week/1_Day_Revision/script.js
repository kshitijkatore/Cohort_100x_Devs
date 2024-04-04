// anonymous funtuion
/*
function sumOfSquare(a, b, callback){
    let val1 = callback(a);
    let val2 = callback(b);

    return val1 + val2;
}

let ans = sumOfSquare(2, 3, function(n){
    return n * n;
})
console.log(ans);
*/

// callback function
/*
function square(n){
    return n * n;
}

function sumOfSquare(a, b, callback){
    let val1 = callback(a);
    let val2 = callback(b);

    return val1 + val2;
}

let ans1 = sumOfSquare(2, 3, square);
console.log(ans1);
*/

/*
function square(n){
    return n * n;
}

function sumOfSquare(a,b){
    return a + b;
}
let ans = sumOfSquare(square(2), square(3));
console.log(ans);
*/

// ASYNC FUNCTION
//setTimeout
/*
function onDone(){
    console.log("Hi there..");
}
setTimeout(onDone, 1000);
console.log("after setTimeout");
*/

/*
let a = 1;
console.log(a);
const fs = require('fs');
fs.readFile('a.txt', "utf-8", (err, data)=>{
    console.log("data read from file is :");
    console.log(data);
})

let ans = 0;
for(let i = 0; i< 100; i++){
    ans =ans + i;
}
console.log(ans);
*/

// promises
//Approach-1 Wrapping another async function.
/*
function myOwnSetTimeout(fn , duration){
    setTimeout(fn, duration);
}

myOwnSetTimeout(function(){
    console.log("Hi there...");
}, 1000)
*/

/*
// Approach-2 using promises
function promisifiedMyOwnSetTimeout(duration) {
  const p = new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, duration);
  });
  return p;
}

//promise
let ans = promisifiedMyOwnSetTimeout(1000);
ans.then(function () {
  console.log("Hi there..");
});
*/
/*
function fn(resolve){
    for(i = 1; i<100; i++){
        a = a + i;
    }
    resolve(a);
}
const p = new Promise(fn);
*/

//promisified function
setTimeout(1000).then(function(){
    console.log("Hi there...");
})


/*
function sum(a, b){
    return new Promise(function(resolve){
        resolve(a + b);
    })
}
sum().then(function (ans){
    console.log(ans);
})
*/

/*
function sumOfSquare(a, b, calback){
    let val1 = a * a;
    let val2 = b * b;

    calback(val1 + val2);
}

// without promisified function
sumOfSquare(1, 2, function(value){
    console.log(value);
})

// call with promisified function
sumOfSquare(1, 2).then(function(value){
    console.log(value);
})
*/

/*
function firstFunction(){
    return new Promise(function(resolve){
        resolve(function(){
            return Promise(function(resolve){
                resolve();
            })
        })
    })
} 

firstFunction().then(function(result){
    return result;
}).then(function(){

})
*/
