/*
function findSum(n){
    let sum = 0;
    for(let i = 0; i < n; i++){
        sum = sum + i;
    }
    return sum;
}
console.log(findSum(10));
*/

/*
function sum(a, b){
    return a + b;
}
console.log(sum(2,4));
*/

// arrow function
/*
let findSum = (n) =>{
    let sum = 0;
    for(let i = 0; i < n; i++){
        sum = sum + i;
    }
    return sum;
}
let ans  = findSum(10);
console.log(ans);
*/

// IIFE 
/*
(function(name) {
    console.log("Hello, " + name + "!");
})("John");

(function (n){
    let sum = 0;
    for(let i = 0; i<n; i++){
        sum = sum + i;
    }
    console.log(sum);
})(10);
*/

/*
function* myGenerator(){
    console.log("first pass");
    yield 1;
    console.log("second pass");
    yield 2;
    console.log("third pass");
}

let generator = myGenerator();
console.log(generator.next().value);// 1
console.log(generator.next().value);// 2
console.log(generator.next().value);// undefined
*/

/*
// cunstructor function 
function myClass(name, age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log("Hello " + this.name + "!");
    }
}

let person = new myClass("xitij", 20);
console.log(person.name);
console.log(person.age);
person.greet();
*/


/*
// method function
var myObj = {
    myMethod: function(){
        console.log("Hello");
    }
}
console.log(myObj.myMethod());
*/


// call backfunction
/*
function square(n){
    return n * n;
}

function cube(n){
    return n  * n * n;
}

function sumOfSquares(a, b){
    const val1 = square(a);
    const val2 = square(b);

    return val1 + val2;
}

function sumOfCubes(a, b){
    const val1 = cube(a);
    const val2 = cube(b);

    return val1 + val2;
}
console.log(sumOfSquares(1, 2));
console.log(sumOfCubes(1, 2));
*/

/*
function square(a){
    return a * a;
}

function sumOfSomething(a, b, callback){
    const val1 = callback(a);
    const val2 = callback(b);

    return val1 + val2;
}

let ans = sumOfSomething(1, 2, square);
console.log(ans);
*/

//Anonymous  function
function sumOfSomething(a, b, callback){
    const val1 = callback(a);
    const val2 = callback(b);

    return val1 + val2;
}

var ans = sumOfSomething(1, 2, function(a){
    return a * a;
})

console.log(ans);

