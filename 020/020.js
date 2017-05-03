
var valueArr = [1];
var count = 101;
var upNum = 0;
for(var i=1;i<count;i++){
    var arrLength = valueArr.length;
    for(var j=0;j<arrLength;j++){
        var __newNum = valueArr[j] * i+upNum;
        var __numStr = __newNum+"";
        upNum = 0;
        if(__newNum>=10){
            valueArr[j] = __numStr.slice(__numStr.length-1,__numStr.length)*1;
            upNum = __numStr.slice(0,__numStr.length-1)*1;
        }
        else
            valueArr[j] = __newNum;

        if(j == arrLength-1 && upNum != 0){
            var _upArr = (upNum+"").split("")
            while(_upArr.length != 0){
                valueArr.push(_upArr.pop()*1);
            }
            upNum = 0;
        }
    }
}
console.log(valueArr.reduce((p,c)=>p+c,0)); // => 648
