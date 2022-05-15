//Qn2)Convert all the strings to title caps in a string array:-
//(Anonymous)
var str='geeks for geeks';
var fun=function(str){
  if ((str===null) || (str===''))
       return false;
  else
   str = str.toString();
   return str.replace(/\w\S*/g, 
function(txt){return txt.charAt(0).toUpperCase() +
       txt.substr(1).toLowerCase();});
}
console.log(fun(str));

//(Arrow)
var str='geeks for geeks';
var fun=(str)=> {
  if ((str===null) || (str===''))
       return false;
  else
   str = str.toString();
   return str.replace(/\w\S*/g, 
function(txt){return txt.charAt(0).toUpperCase() +
       txt.substr(1).toLowerCase();});
}
console.log(fun(str));

//(IIFE)
var str='geeks for geeks';
(function fun(str){
  if ((str===null) || (str===''))
       return false;
  else
   str = str.toString();
   return str.replace(/\w\S*/g, 
function(txt){return txt.charAt(0).toUpperCase() +
       txt.substr(1).toLowerCase();});
})(str);

