var prevNum = [1]
var currentNum = [1]
var _left = 0;
var count = 2;
while(currentNum.length<1000){
    count++;
    var _currentCopy = currentNum.slice(0,currentNum.length);
    var _left = 0;
    for(var i=0;i<currentNum.length;i++){
        _cLeft = _left
        _left = (currentNum[i]+(prevNum[i] || 0)+_cLeft)>9? 1:0
        currentNum[i] = (currentNum[i]+(prevNum[i] || 0)+_cLeft)%10;
    }
    if(_left == 1) currentNum.push(_left);
    prevNum = _currentCopy;
}
console.log(count); //=> 4782;
