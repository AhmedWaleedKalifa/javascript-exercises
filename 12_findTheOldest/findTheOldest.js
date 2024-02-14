const findTheOldest = function(arr) {
    for(let i =0;i<arr.length;i++){
        if(arr[i].yearOfDeath){
            continue
        }else{
            const currentYear=(new Date()).getFullYear();
            arr[i].yearOfDeath=currentYear;
        }
    }
    let max={
        name: "Jane",
        yearOfBirth: 0,
        yearOfDeath: 0,
      };
    for(let i=0;i<arr.length;i++){
        if((arr[i].yearOfDeath-arr[i].yearOfBirth)>(max.yearOfDeath-max.yearOfBirth)){
            max=arr[i];
        }
    }
    return max;
};

// Do not edit below this line
module.exports = findTheOldest;
