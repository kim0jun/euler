var _arr = [];
for(var i = 2;i<1000000;i++){
    var _nArr = (i+"").split("").reduce((p,c)=>p+Math.pow(c,5),0);
    if(i == _nArr) _arr.push(i);
}
console.log(_arr.reduce((p,c)=>p+c,0));//=>443839;