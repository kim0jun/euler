// 소수를 크기 순으로 나열하면 2, 3, 5, 7, 11, 13, ... 과 같이 됩니다.

// 이 때 10,001번째의 소수를 구하세요.


var count = 10001;
var arr = [2];
var num = 2;
while(arr.length < count){
    num++;
    for(var i=0;i<arr.length;i++){
        if(num%arr[i] == 0)
            break;
        if(i == arr.length-1){
            arr.push(num);
        }
    }  
};
console.log(arr[arr.length-1])

