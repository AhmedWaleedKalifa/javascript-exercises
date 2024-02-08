const reverseString = function(string) {
    let con="";
    for(let i=(string.length-1);i>=0;i--){
        con+=string.at(i);
    }
    return con;
};

// Do not edit below this line
module.exports = reverseString;
