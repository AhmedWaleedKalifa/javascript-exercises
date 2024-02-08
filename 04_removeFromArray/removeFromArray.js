const removeFromArray = function(arr,...num) {
   let newArr=num;
   for(let n of num){
    arr = arr.filter(function(item) {
        return item !==n;
    })
   }
   return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
