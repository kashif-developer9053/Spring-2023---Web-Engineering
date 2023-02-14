
var number =[5,7,19,2,9,20,1,15];
number.sort(function(a,b){return a - b});
console.log(number);

    let sum =0;
    for(let i = 0; i < number.length; i++){
        sum +=number[i];
    }
    function finding(number){
    let min= sum - Math.max(...number);
    let max = sum - Math.min(...number);
    return[max,min];
}

let [max,min]= finding(number);
console.log("Minimum possible value is=" +min);
console.log("Maximum possible value is=" +max);
//output will be [1,2,5,7,9,15,19,20]
//Minimum  value is = 58
//Maximum  value is = 77