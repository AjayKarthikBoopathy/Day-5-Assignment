//Qn6)Return all the prime numbers in an array:-
//(Anonymous)
var arr=[1,2,3,4,5,6,7,8];
var fun=function(num) {
  for (let start = 2; num > start; start++) {
    if (num % start == 0) {  //condition for composite numbers
      return false;
    }
  }
  return num > 1;    //other numbers are prime
}
var findPrime =(arr) => {
return arr.filter((x) => fun(x));
}
console.log(findPrime(arr));

//(Arrow)
var arr=[1,2,3,4,5,6,7,8];
var fun=(num) => {
  for (let start = 2; num > start; start++) {
    if (num % start == 0) {  //condition for composite numbers
      return false;
    }
  }
  return num > 1;    //other numbers are prime
}
var findPrime =(arr) => {
return arr.filter((x) => fun(x));
}
console.log(findPrime(arr));

//(IIFE)
var arr=[1,2,3,4,5,6,7,8];
(function(num) {
  for (let start = 2; num > start; start++) {
    if (num % start == 0) {  //condition for composite numbers
      return false;
    }
  }
  return num > 1;    //other numbers are prime
}
console.log(fun(arr.filter(prime)));
)(num);