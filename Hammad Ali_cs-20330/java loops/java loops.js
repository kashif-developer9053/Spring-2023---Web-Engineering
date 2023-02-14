let names = ["hammad", "haseeb", "noman", "rajpoot", "hassan"];

names.forEach(function(name) {
console.log(name);
});

//map loop example in javascript

let names2 = ["hammad", "haseeb", "noman", "rajpoot", "hassan"];
let mappedNames2 = names2.map(function(name) {
return name.toUpperCase();
});
console.log(mappedNames2);

//filter loop example in javascript

let names3 = ["hammad", "haseeb", "noman", "rajpoot", "hassan"];
let filteredNames3 = names3.filter(function(name) {
return name.length >= 6;
});
console.log(filteredNames3);