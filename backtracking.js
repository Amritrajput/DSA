 function backtrackcount(n){
    function count(i){
        if(i<1) return;
        count(i-1);
        console.log(i);

    }
    count(n);
 }
 backtrackcount(5)