var n = 1;
var sum = 1;
for(var i=1;i<=500;i++)
    for(var j=1;j<=4;j++){
        n += 2*i  
        sum += n;
        console.log(n);
    }
console.log(sum) //=> 669171001