let s = "amrit"
let n= s.length

function ispalindrome (i) {
if(i>=n/2) return;
if(s[i]!=s[n-i-1]) return false;
 return ispalindrome(i+1) ;
}
if(ispalindrome(0)){
   console.log("palindrome");
}else{
    console.log("not palindrome");
}