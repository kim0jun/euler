//소인수 구하기
var i = 2;
var dvisorArr = [];
while(i<=10000){
    
    j = i;
    a = [1];
    for(k = 2;k < j; k++){
        if(j%k == 0){
            a.push(k)
        }
    }
    dvisorArr.push(a.reduce((a,b)=>a+b,0));
    i++;
}
sum = dvisorArr.filter((v,i)=> v == dvisorArr[i] && dvisorArr[v-2] == i+2 && v != i+2).reduce((a,b)=>a+b,0);
console.log(sum) // => 31626;
