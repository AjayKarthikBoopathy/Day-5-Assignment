//Qn7)Return all the palindromes in an array:-	
//(Arrow)
var arr = ['carecar', 1344, 12321, 'did', 'cannot'];
var isPalindrome =(el) => {
   var str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
}
var findPalindrome =(arr) => {
   return arr.filter((el) => isPalindrome(el));
}
console.log(findPalindrome(arr));

//(Anonymous)
var arr = ['carecar', 1344, 12321, 'did', 'cannot'];
var isPalindrome =function(el) {
   var str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
}
var findPalindrome =(arr) => {
   return arr.filter((el) => isPalindrome(el));
}
console.log(findPalindrome(arr));

//(IIFE)
var arr = ['carecar', 1344, 12321, 'did', 'cannot'];
(function(el) {
   var str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
}
var function(arr){
   return arr.filter(function(el));
};
console.log(function(arr));
)();
