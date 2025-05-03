let arr =[1,2,3,4,5];
let n = arr.length;
function reverse(l,r){
    if(l>=r) return;
    let temp=arr[l];
    arr[l]=arr[r];
    arr[r]=temp;
    reverse(l+1,r-1);
}
reverse(0,n-1)
console.log(arr);


