var arr = [];
for(var i=2;i<=100;i++)
    for(var j=2;j<=100;j++){
        var _n = Math.pow(i,j)
        if(arr.indexOf(_n) == -1) arr.push(_n);
    }

console.log(arr.length);
        