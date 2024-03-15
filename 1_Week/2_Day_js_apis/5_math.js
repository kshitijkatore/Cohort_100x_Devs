// Math objects

const mathMethods = (value)=>{
    console.log("Original value :", value);

    let rounded = Math.round(value);
    console.log("Rounded value :", rounded);

    let ceiling = Math.ceil(value);
    console.log("Ceiling value :", ceiling);

    let flooring = Math.floor(value);
    console.log("Floor value :", flooring);

    let randomValue = Math.random();
    console.log("Random value :", randomValue); 

    let maxValue = Math.max(1,2,3,4,5,6,7,8,9,10);
    console.log("Max value :", maxValue);

    let minValue = Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    console.log("Min value :", minValue);

    let powerOfTwo = Math.pow(value, 2);
    console.log("Power of two :", powerOfTwo);

    let absoluteValue = Math.abs(value);
    console.log("Absolute value :", absoluteValue);

    let squreRoot = Math.sqrt(value);
    console.log("Square root :", squreRoot);

}
mathMethods(4);