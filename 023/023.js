

// 초과수 구하기
const start = 2;
const end = 28123;
var   sum = 0;

// 초과수 배열;
const excNumArr = [];
const ignoreIdxs = [];



// 초과수 구하기 
for(let i = start; i<=end; i+=1 )
    if(isExcNumber(i)) excNumArr.push(i)


// 초과수의 합 구하기
for(var i = 0; i < excNumArr.length; i += 1){
    for(var j = 0; j < excNumArr.length; j += 1){
        let sum = excNumArr[i]+excNumArr[j];
        if(sum >= end) break;
        ignoreIdxs[sum] = true
    }
}

// 초과수의 합을 제외한 것들 더하기
for(var i = 0; i < end;i += 1){
    sum += (ignoreIdxs[i])? 0:i;
}

console.log(sum); // => 4179871



function isExcNumber(num){
    let divisors = [1];
    for(let i = 2;i <= num/2; i++){
        if(num%i == 0){
            divisors.push(i)
        }
    }
    return num < divisors.reduce((a,b)=>a+b,0)
}
