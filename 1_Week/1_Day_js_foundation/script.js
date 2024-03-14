// Write the program to great a person given their first and last name.

/*
let greet = (firstName, lastName)=>{
    let frstName = prompt("Enter your first name");
    let lstName = prompt("Enter your last name:");
    console.log(`Hello, ${frstName} ${lstName}`);

}
greet();

*/

//Write the program that greets a person based on their gender. (if else)

/*
let greet = ()=>{
    let gender = prompt("Enter your gender:");

    if(gender == "male"){
        console.log("Hello, sir");
    }
    else if(gender == "female"){
        console.log("Hello, maam");
    }else{
        console.log("Please, Enter the gender...");
    }
}
greet();

*/

// Write a program that counts from 0 -1000 and prints.

/*
//for loop
let counts = 0;
for(let i = 0; i<=1000; i++){
    console.log(i);
    counts++;
}

// while loop
let counts = 0;
while(counts<=1000){
    console.log(counts);
    counts++;
}

// do while
let counts = 0;
do{
    console.log(counts);
    counts++;
}
while(counts<=1000);

*/

// Data Types in JavaScript.
/*
let firstName = "xitij";
let age = 18;
let isMarried = false;

console.log(typeof(firstName));
console.log(typeof(age));
console.log(typeof(isMarried));

*/

// Arrays and Objects.....

/*
const personArray = ["xitij", "sham", "ram"];
console.log(personArray);
console.log(personArray[0]);

for(i = 0; i< personArray.length; i++){
    if(personArray[i] == "sham"){
        console.log("found");
    }
    else{
        console.log("not found");
    }   
}
*/

/*
const personArray = ["xitij", "kshitij", "sham", "priya"];
const genderArray = ["male", "male", "male", "female"];

for(let i = 0; i<personArray.length; i++){
    if(genderArray[i] == "male"){
        console.log(personArray[i]);
    }
}
*/

/*
const user1 = {
    firstName: "kshitij",
    lastName: "katore",
    gendr: "male",
}
console.log(user1.firstName); // 1st way of accesing element
console.log(user1["firstName"]);
*/

// array od objects
/*
const allUser = [{
    firstName: "kshitij",
    lastName: "katore",
    gender: "male"
},{
    firstName: "sham",
    lastName: "kore",
    gender: "male"
},{
    firstName: "priya",
    lastName: "vasti",
    gender: "female",
    metadata:{
        age: 21,
        address: "shivaji ward no 3."

    }

}];

for(let i = 0; i<allUser.length; i++){
        console.log(allUser[i]["metadata"]["age"]);
}

// Write a programs prints all the even numbers in an array
/*
let arr = [1,2,3,4,5,6,7,8,9,10];
let evenNUm = [];

for(let i = 0; i<arr.length; i++){
    if(arr[i] % 2 == 0){
        evenNUm.push(arr[i]);
    }
}
console.log(evenNUm);

*/


// Function...

// Write a function that finds the sum of two numbers.
/*
var sumOfTwoNumbers = (num1, num2)=>{
    return num1 + num2;
}
var sum = sumOfTwoNumbers(1,3);
console.log(sumOfTwoNUmbers);
*/

/*
function sum(num1, num2){
    let result = num1 + num2;
    return result;
}

function displayResult(data){
    console.log("Result of the sum is :" + data);
}

function dispalyResultPassive(data){
    console.log("Sum's result is :" + data);
}

const ans = sum(1,2);
displayResult(ans);
*/

// function to call
/*
function sum(num1, num2, funToCall){
    let result = num1 + num2;
    funToCall(result);
}

function displayResult(data){
    console.log("Result of the sum is :" + data);
}

function dispalyResultPassive(data){
    console.log("Sum's result is :" + data);
}

const ans = sum(1,2, displayResult); // function to call.
const ans2 = sum(1, 3, dispalyResultPassive);
*/

/*
var calculate = (a, b, type)=>{
    if(type == "add"){
        return a + b;
    }
    if(type == "minus"){
        return a - b;
    }

}
const value = calculate(2, 3, "add");
console.log(value);
*/

/*
function calulateArithmetic(a, b, type){
    if(type == "sum"){
        const value = sum(a, b);
        return value;
    }
    if(type == "sub"){
        const value = sub(a, b);
        return value;
    }
}


let sum = (a, b)=>{
    return a + b;
}

let sub = (a, b)=>{
    return a - b;
}

const value = calulateArithmetic(2, 3, "sum");
console.log(value);
*/

/*
// callback function
let calculateArithmatic = (a, b, arithmaticFinalFunction)=>{
    const ans = arithmaticFinalFunction(a, b);
    return ans;
}

let sum = (a,b)=>{
    return a + b;
}

let sub = (a, b)=>{
    return a - b;
}
const value = calculateArithmatic(2, 3, sum);
console.log(value);
*/

/*
// setTimeout
let greet = ()=>{
    console.log("hello");
}

setTimeout(()=>{
    greet();
}, 3 * 1000)


// setInterval
let greetAlient = ()=>{
    console.log("hello alien");
}

setInterval(()=>{
    greetAlient();
}, 2 * 1000)
*/

















