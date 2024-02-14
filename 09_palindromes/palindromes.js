const palindromes = function (string) {
    const arr=stringToArr(string);
    let check=true;
    if(arr.length==0|arr.length==1){
        return true;
    }else if(arr.length==2){
        if(arr[0]==arr[1]){
            return true;
        }else{
            return false;
        }
    }
    else if(arr.length%2==0){
        for(let i=0;i<(arr.length)/2-1;i++){
            if(arr.at(i)!=arr.at(-(i+1))){
                check=false;
            }
        }
        return check;
    }else{
        for(let i=0;i<(arr.length-1)/2;i++){
            if((arr.length-1)/2==i){
                return true;
            }
            if(arr.at(i)!=arr.at(-(i+1))){
                check=false;
            }
        }
        return check;
    }
 };
 function stringToArr(string){
    const arr=[];
    for(let i=0;i<string.length;i++){
        arr[i]=string[i];
    }
    return arr;
    }
// Do not edit below this line
module.exports = palindromes;
