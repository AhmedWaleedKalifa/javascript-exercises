const fibonacci = function(number) {
    let fiboArray=[];
    fiboArray[0]=1;
    fiboArray[1]=1;
    for(let i =2;i<=number;i++){
        fiboArray[i]=fiboArray[i-1]+fiboArray[i-2];
    };
    if(number==0){
        return 0;
    }else if(number<0){
        return "OOPS";
    }
    return fiboArray[number-1];
};
// Do not edit below this line
module.exports = fibonacci;
