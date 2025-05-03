// fibonacci number

function fibonacci (n){
if( n==0 || n==1) return n;
let fib = fibonacci(n-1) + fibonacci(n-2);
return fib;
}

console.log(fibonacci(4));
