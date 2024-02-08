const repeatString = function(string,num) {
    if(num<0){
        return 'ERROR';
    }
    let con="";
    for(let i=0;i<num;i++){
        con+=string;
    }
    return con;
};

// Do not edit below this line
module.exports = repeatString;
