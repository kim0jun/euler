var weeks = 7;
var monthsArr = [31,28,31,30,31,30,31,31,30,31,30,31]
var startY = 1900;
var endY = 2000;
var days = 0;
var count = 0;
for(var y=startY;y<=endY;y++){
    for(var m=0;m<monthsArr.length;m++){
        //1900년은 카운팅하지 않는다.
        if(days%weeks == 6 && y>=1901) count ++;
        if(m == 1 && checkLeapYear(y))
            days += 29;
        else
            days += monthsArr[m];
    }
}
console.log(count);  // => 171

function checkLeapYear(y){
    return (y%4 === 0)  && ((y%100 !== 0) || (y%400 === 0));
}
