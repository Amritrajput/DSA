let arr = [3,2,4,5,6,7]
let n = arr.length;
let sum=12
function subsequencesum(ind,array,s){
    if(ind == n){
      if(s===sum){
        console.log(array);
      }
        return;
      }
      array.push(arr[ind]);
      s+=arr[ind];
      subsequencesum(ind+1,array,s);
      array.pop();
      s-=arr[ind];
      subsequencesum(ind+1,array,s);
     }

subsequencesum(0,[],0)