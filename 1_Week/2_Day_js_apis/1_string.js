// String handbook
/*
let str = "xitij katore";
console.log(str);

let getLength = (str)=>{
    console.log("Original string :" + str);
    console.log("Length of string :" + str.length);
}
getLength("Xitij Katore");
*/

/*
// indexOf
let findIndexOf = (str, target)=>{
    console.log("Original string :" + str);
    console.log("Indeex :" + str.indexOf(target));
}
findIndexOf("Xitij Katore", "Katore");
*/

/*
//lastIndexOf
let lastIndexOf = (str, target)=>{
    console.log("Original String :" + str);
    console.log("Last index Of :" + str.lastIndexOf(target));

}

lastIndexOf("xitij katore katore katore", "katore");
*/

/*
// slice
let getSlice = (str, start ,end)=>{
    console.log("Original String :" + str);
    console.log("Slice :" + str.slice(start, end));
}
getSlice("Xitij katore", 0, 5);

// substring
let getSubString = (str,  start, length)=>{
    console.log("Original String :" + str);
    console.log("Substirng :", str.substring(start, length));
}
getSubString("Xitij Katore", 2, 3);


let cutIt = (str, startIndex, endIndex)=>{
    let newstr = "";
    for(let i =0; i< str.length; i++){
        if(i >= startIndex && i<endIndex){
            newstr += str[i];
        }
    }
    return newstr;
}

console.log(cutIt("Xitij Katore", 2, 5));
*/

/*
// replace string
let replaceString = (str, target , replacement)=>{
    console.log("Original String :" + str);
    console.log("Replacement :" + str.replace(target, replacement));
}
replaceString("hello world", "world", "javascript");


let replaceAll = (str , target, replacement)=>{
    console.log("Original String :" + str);
    console.log("Replacement :" + str.replaceAll(target, replacement));
}
replaceAll("hello world world", "world", "javascript");
*/

/*
let getsplit = (str, target)=>{
    console.log("Original string :" + str);
    console.log("Split :" + str.split(target));
}
getsplit("xitij katore", " ");

let trim = (str)=>{
    console.log("Original String :" + str);
    console.log("Trim :" + str.trim());
}
trim("  xitij katore  ");
*/


/*
// upperCase
let upperCase = (str)=>{
    console.log("Original String :" + str);
    console.log("UpperCase :" + str.toUpperCase());
}
upperCase("xitij katore");

// lowerCase
let lowerCase = (str)=>{
    console.log("Original String :" + str);
    console.log("LowerCase :" + str.toLowerCase());
}
lowerCase("XITIJ KATORE");
*/

/*
let explainParseInt = (value)=>{
    console.log("Value :" + value);
    console.log("Type :" + typeof value);
    console.log("ParseInt :" + parseInt(value));
    console.log("Type :" + typeof parseInt(value));
}
explainParseInt("10");
explainParseInt("10.5");
explainParseInt("10.5xxfefe");
explainParseInt("vdds10.5xxfefe");

// parseFloat
let explainParseFloat = (value)=>{
    console.log("Value :" + value);
    console.log("Type :" + typeof value);
    console.log("ParseFloat :" + parseFloat(value));
    console.log("Type :" + typeof parseFloat(value));
}

explainParseFloat("10");
explainParseFloat("10.5");
explainParseFloat("10.5xxfefe");
explainParseFloat("vdds10.5xxfefe");
*/

