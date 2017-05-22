//초과수 구하기
var i = 2;
//초과수 배열;
var exc_num_arr = [];
while(i<=20){
    j = i;
    a = [1];
    for(k = 2;k < j; k++){
        if(j%k == 0){
            a.push(k)
        }
    }
    if(i < a.reduce((a,b)=>a+b,0)) exc_num_arr.push(i);
    i++;
}

for(var i=0;i<exc_num_arr.length;i++)
    for(var j=0;j<exc_num_arr.length;j++)
        console.log(exc_num_arr[i]+exc_num_arr[j]) // 초과수의 합 
