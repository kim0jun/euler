// 앞에서부터 읽을 때나 뒤에서부터 읽을 때나 모양이 같은 수를 대칭수(palindrome)라고 부릅니다.

// 두 자리 수를 곱해 만들 수 있는 대칭수 중 가장 큰 수는 9009 (= 91 × 99) 입니다.

// 세 자리 수를 곱해 만들 수 있는 가장 큰 대칭수는 얼마입니까?
var m,s,r = 0
var startNum = 100;
var lastNum = 999;
for(var a=startNum;a<=lastNum;a++){
    for(var b=a;b<=lastNum;b++){
        s = a*b+""
        r = s.split("").reverse().join("");
        if(r == s){
          m = (m>=(s*1))? m:s*1 ;  
        }         
    }   
}
console.log(m) // => 906609

//일반식
 for(var i=0,j=0;i<=100000;i++)
	j+=i
console.log(j)


1~9
console.log(1+11*9*10/2)

