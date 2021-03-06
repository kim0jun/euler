// 1 ~ 10 사이의 어떤 수로도 나누어 떨어지는 가장 작은 수는 2520입니다.

// 그러면 1 ~ 20 사이의 어떤 수로도 나누어 떨어지는 가장 작은 수는 얼마입니까?

// 첫번째 방법, 최소공배수 공식 적용

var l = 1;
var maxDivisor = {}
var c = 0;
for(var i=2;i<=20;i++){
    var divisor = {}
    var n = i;
    for(var j=2;n != 1;j){
        if(n % j == 0){
            n = n/j;
            divisor[j] = ++divisor[j]||1;
            maxDivisor[j] = Math.max(maxDivisor[j] || 1,divisor[j])
        }else{
            j++;
        }
    }
    
}

for( key in maxDivisor){
    l = Math.pow(key,maxDivisor[key])*l
}
console.log(l) //==>232792560


// 쌩 반복문, 계산시간이 심히 오래 걸린다.

var minMutiple = 2;
while(1){
    minMutiple++;
    for(var i = 2;i<=20;i++){
        if(minMutiple%i != 0){   
            break;
        }        
        if(i == 20){
            console.log(minMutiple) // ==> 232792560;
            return 0;
        }
    }    
}
