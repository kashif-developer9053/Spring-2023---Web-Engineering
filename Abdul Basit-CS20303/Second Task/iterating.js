const fruits=["banana", "strawberry","apple","mango","grapes"];
console.log("Iterating normally over elements: \n");
// normal iteration
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
    for(let z=0;z<fruits.length;z++){
        console.log(fruits[z])
    }

}

// reverse iteration
// console.log("Iterating over elements in reverse order: \n");
// for(let i=fruits.length-1;i>=0;i--){
//     console.log(fruits[i]);
// }
