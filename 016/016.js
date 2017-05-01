
var num = 2;
var valueArr = [2];
var upNum = 0;
var count = 1000;

for(var i=1;i<count;i++){
    var arrLength = valueArr.length;
    for(var j=0;j<arrLength;j++){
        var __newNum = valueArr[j] * 2+upNum;
        upNum = 0;
        if(__newNum>=10){
            valueArr[j] = (__newNum+"").slice(1,__newNum.length)*1;
            upNum = (__newNum+"").slice(0,1)*1;
        }
        else
            valueArr[j] = __newNum;

        if(j == arrLength-1 && upNum != 0){
            valueArr.push(upNum);
            upNum = 0;
        }
    }
}
console.log(valueArr.reduce((p,c)=>p+c,0)); // ==> 1366;

