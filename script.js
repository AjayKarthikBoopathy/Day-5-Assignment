//Qn1)Print odd numbers in an array:-
//(Anonymous function)
var a=[1,2,3,4];
var res=[];
var fun=function(a){
for(let i=0;i<a.length;i++){
if(i%2===0){
res.push(a[i]);
}
}
return res;
}
console.log(fun(a));

//(IIFE)
var a=[1,2,3,4];
var res=[];
(function fun(a){
for(let i=0;i<a.length;i++){
if(i%2===0){
res.push(a[i]);
}
}
console.log(res);
})(a);

//(Arrow Function)
var a=[1,2,3,4];
var res=[];
var fun=(a)=>{
for(let i=0;i<a.length;i++){
if(i%2===0){
res.push(a[i]);
}
}
return res;
}
console.log(fun(a));

