var length = 0;
var numArr0 =  ["one","two","three","four","five","six","seven","eight","nine"];
var numArr1 =  ["eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
var numArr2 =  ["ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
var numArr3 =  ["hundred","thousend","million"];



function numberToEnWord(number){
    if(number == 0) 
        return "";
    else if(number === 1000)
        return numberToEnWord(Math.floor(number/1000))+numArr3[1];
    else if(number >= 100)
        return numberToEnWord(Math.floor(number/100))+" "+numArr3[0]+((number%100 === 0)? "":" and "+numberToEnWord(number%(Math.floor(number/100)*100)));
    else if (number%10 === 0)
        return numArr2[number/10-1];
    else if(number<10)
        return numArr0[number-1];
    else if(number > 10 && number < 20)
        return numArr1[number-11];
    else 
        return numberToEnWord(Math.floor(number/10)*10)+"-"+numberToEnWord(number%10);
}


for(var i =1;i<1001;i++){
    length += numberToEnWord(i).replace(/\s|\-/g,"").length;
}

console.log(length);