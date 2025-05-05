// meaning of subsequences :- a contiguous / -
// non contiguous sequences , which follows the order
// ex:[3,1,2]
// 3
// 1
// 2
// 3,1
// 1,2
// 3,2
// 3,1,2


let arr = [3,1,2]
let n = arr.length
let array = new Array();
function subsequences(ind,array){
if(ind>=n) {
    console.log(array);
    return;
}
array.push(arr[ind]);
subsequences(ind+1,array);
array.pop();
subsequences(ind+1,array)
}
subsequences(0,[])