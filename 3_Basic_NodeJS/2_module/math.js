// module file

function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

// module.exports = add;

// suppose your module file has various different function the use abject

// module.exports = {
//     addfn : add,
//     subfn : sub,
// };


exports.addition = (a, b)=>{
    return a + b;
}

exports.substract = (a, b)=>{
    return a - b;
}

  