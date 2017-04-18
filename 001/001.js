// 10보다 작은 자연수 중에서 3 또는 5의 배수는 3, 5, 6, 9 이고, 이것을 모두 더하면 23입니다.

// 1000보다 작은 자연수 중에서 3 또는 5의 배수를 모두 더하면 얼마일까요?


var sum = 0;
for(var i=0;i<1000;i++){
    sum += (i%3 == 0 || i%5 == 0)? i:0;
}
console.log(sum) // => 233168




// other solution

// 합의 공식을 이용하여 해결

function sumOfRange(distance,range){
    var length = Math.floor(range/distance)
    return length * (length+1)/2*distance
}
console.log(sumOfRange(3,999)+sumOfRange(5,999)-sumOfRange(15,999)) // => 233168