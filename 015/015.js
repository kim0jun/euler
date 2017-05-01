
var arr = [1]
for(var i =1;i<=20;i++){
     arr.push(arr.reduce((p,c)=>p+c,0)*2);
     for(var j = i-1; j > 0;j--){
            arr[j] = arr.slice(0,j+1).reduce((p,c)=>p+c);
     } 
}
console.log(arr.pop()); // => 137846528820


// 다른 사람들이 푼방법은 다음알고리즘에 의거함 
// factorial(i*2)/factorial(i)*factorial(i) ==> 정답

var factorial = (k) =>(k !== 1)? k*factorial(k-1):1
console.log(factorial(40)/(factorial(20)*factorial(20))); // => 137846528820

//아래방식은 폐기한다  -- > 너무 느리기때문

// function findRoute(cX,cY,eX,eY){
//     var count = 0;
    
//     if(cX<eX && cY<eY){
//         count = 1;
//         count += findRoute(cX+1,cY,eX,eY);
//         count += findRoute(cX,cY+1,eX,eY);
//     }

//     return count
// }

// console.log(
//     findRoute(0,0,20,20)+1
// );


