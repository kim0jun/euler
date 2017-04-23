
var num = 2;
var arr = [2];
var maxNum = 10;
var sum = 2;
while(num < maxNum){
    num++;
    for(var i=0;i<arr.length;i++){
        if(num%arr[i] == 0)
            break;
        if(i == arr.length-1){            
            arr.push(num);
            
            sum += num;
        }
    }  
};
console.log(sum)