const input = [21,10,35,9,19,5,60];
const result = [0,0];
let max = input[0];
let min = input[0];

input.forEach((element,index,array)=> {
	if (element>max){
		max=element;
		result[1]=result[1]+1;
	}
	  if(element<min){
		min=element;
		result[0]=result[0]+1;
	}
})
console.log(result);
