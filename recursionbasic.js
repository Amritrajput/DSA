// Q.count till 1 to 3
function counting(){
    let count=1;
    
    function counts(){
        if(count===4) return;
        console.log(count);
        count++;
        counts();
    }
    counts();
}
counting()