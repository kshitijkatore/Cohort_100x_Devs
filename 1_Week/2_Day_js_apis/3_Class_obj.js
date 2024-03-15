// class objects
/*
class Animal{
    constructor(names, legCount, speaks){
        this.names = names;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    speak(){
        console.log("Hi there " + this.speaks)
    }
    legs(){
        console.log("Their legs are :" + this.legCount);
    }
    name(){
        console.log("Their name is :" + this.names)
    }
}

// dont write these way....
let dog = {
    name: "dog",
    legCount: 4,
    speaks: "bhow"
}(

// write these way
// Thise is create a object of class..
let dog = new Animal("dog", 4, "bhow bhow");
let cat = new Animal("cat", 4, "meow");
// call functions on object...
dog.speak();
dog.legs();
dog.name();

*/

/*
class Animal{
    constructor(names, legCount, speaks){
        this.names = names;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    static myType(){
        console.log("Animal");
    }

    name(){
        console.log("Their name is :" + this.names)
    }
    leg(){
        console.log("Thier legs is :" + this.legCount);
    }
    speak(){
        console.log("Speaks :" + this.speaks)
    }
}

// static part
console.log(Animal.myType());

let dog = new Animal("dog", 4, "bhow bhow..");
dog.name();
dog.leg();
dog.speak();

// we not use static method crete the objects call the function.
// but create static method will not create the object and onnot call it in function.

*/

// Date module
/*
const currentDate = new Date();
console.log("Month :" + currentDate.getMonth());
console.log("Year :" + currentDate.getFullYear());
console.log("Date :" + currentDate.getDate());
console.log("Day :" + currentDate.getDay());
console.log("Hours :" + currentDate.getHours());
console.log("Minutes :" + currentDate.getMinutes());
console.log("Seconds :" + currentDate.getSeconds());
*/

// setting components of the date
/*
const currentDate = new Date();
currentDate.setFullYear(2022);
console.log("After setFullYear :", currentDate);
console.log("Time in milliseconds since 1970 :", currentDate.getTime());
*/

/*
let calculatSum = ()=>{
    let a= 0;
    for(let i=0; i<1000000000; i++){
        a++;
    }
    return a;
}

const beforeDate = new Date();
const beforeTimesInMIns = beforeDate.getTime();
calculatSum();

const afterDate = new Date();
const afterTimesInMIns = afterDate.getTime();   
const totalTime = afterTimesInMIns - beforeTimesInMIns;
console.log("Total Time :", totalTime);
*/

/*
let currentTimePrint = ()=>{
    console.log(new Date().getTime());
}

setInterval(currentTimePrint, 1000);
*/

// JSON

