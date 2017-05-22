var numArr = [0,1,2,3,4,5,6,7,8,9];
var newVar = [];
var length = numArr.length;
var getCount = 1000000 - 1; // 0부터 카운트 ;
var factorial = (n)=>n<=1?1:n*factorial(n-1);
for(var i = 0 ; i<length;i++){
    var a = factorial(length-i-1);
    var b = 0;
    console.log(getCount%a);
    if(getCount < a )  b = 0;
    else               {
        b = Math.floor(getCount/a);
        getCount = getCount%a;
    }
    popVal =  numArr.slice(b,b+1)[0];
    numArr.splice(b,1);
    newVar.push(popVal);
}
console.log(newVar.reduce((p,v)=>""+p+v),"") // => 2783915460;


