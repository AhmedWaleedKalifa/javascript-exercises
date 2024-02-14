const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(arr) {
	// if(!arr){
  //   return 0;
  // }else{
  //   let sum=0;
  //   for(let i =0;i<arr.length;i++){
  //     sum+=arr[i];
  //   }
  //   return sum;
  // }
  return arr.reduce((total, current) => total + current, 0);
};

const multiply = function(arr) {
  let result=arr[0];
  for(let i=1;i<arr.length;i++){
    result*=arr[i];
  }
  return result;
};

const power = function(num,power) {
  let result=1;
	for(let i =0;i<power;i++){
    result*=num;
  }
  return result;
};

const factorial = function(num) {
  let result=1;
	for(let i=1;i<=num;i++){
    result*=i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
