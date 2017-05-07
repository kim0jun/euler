var fs = require("fs");
//unicode A는 65이다.
var sumOfChar = word => word.split("").reduce((p,c)=>c.charCodeAt()-64+p,0);

new Promise(function(resolve,reject){
    fs.readFile("021/names.txt","utf-8", function(error, data) {
        var _nameArr = data.replace(/\"/g,"").split(",").sort(function(a, b){
            if(a < b) return -1;
            if(a > b) return 1;
            return 0;
        })
        resolve(_nameArr);
    });
}).then((nameArr)=>{
    var sum = nameArr.reduce((p,c,i)=>p+sumOfChar(c)*(i+1),0);
    console.log(sum); // => 5928998674;
})




