
var maxCountObj = {
    n : 0,
    c  : 0
}
for(var i=2;i<=1000000;i++){
    var j = i;
    var c = 0;
    while(j != 1){
        j = (j%2 !== 0)? 3*j+1:j/2;
        c++;
    }
    if( maxCountObj.c < c){
        maxCountObj.n = i;
        maxCountObj.c = c;   
    }
}
console.log(maxCountObj.n);