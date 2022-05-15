//Qn3)Remove duplicates from an array:-
//(Anonymous)
var arr = ["apple", "mango", "apple", 
            "orange", "mango", "mango"];  
    var fun=function(arr){
        return arr.filter((item, 
            index) => arr.indexOf(item) === index);
    }
      console.log(fun(arr));

//(Arrow)
var arr = ["apple", "mango", "apple", 
            "orange", "mango", "mango"];  
    var fun=(arr)=>{
        return arr.filter((item, 
            index) => arr.indexOf(item) === index);
    }  
    console.log(fun(arr));

//(IIFE)
var arr = ["apple", "mango", "apple", 
            "orange", "mango", "mango"];  
    (function(arr){
        var val= arr.filter((item, 
            index) => arr.indexOf(item) === index);
console.log(val);
})(arr);


//Qn4)Sum of all numbers in an array:-
//(Arrow)
console.log(
  [1,2,3].reduce(function(acc, val) { return acc + val; }, 0)
)

