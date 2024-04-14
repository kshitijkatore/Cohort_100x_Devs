const fs = require('fs');

// Syncronous call --> Blocking Operation
// fs.writeFileSync("./test.txt", "Hey there !");



// asyncronous call --> Non- Blocking Operation

// fs.writeFile("./test2.txt", "created with asyncronously", (err)=>{
//     if(err){
//         console.error("error writing to file:", err);
//     }
//     else{
//         console.log("Data written to file successfully!");
//     }
// })


// Reading file sync

// const result = fs.readFileSync("./test.txt", "utf-8");
// console.log(result);


// try {
//     const data = fs.readFileSync('./test.txt', 'utf8');
//     console.log('File contents:', data);
// } catch (err) {
//     console.error('Error reading file:', err);
// }

// // append
// fs.appendFileSync('./test.txt', "Adding some data to file.", 'utf-8');

// // statistics
// console.log(fs.statSync("./test.txt"))