// 000For each loop

const array = ['haseeb', 'ahtisham', 'umar', 'daniyal', 'noman'];
array.forEach(element => console.log(element));

// Map loop
let map = new Map();
map.set("haseeb", 1);
map.set("ahtisham", 2);
map.set("umar", 3);
map.set("daniyal", 4);
map.set("noman", 5);
map.forEach((values, keys) => {
  console.log(values, keys);
});

// Filter loop
const names = ['haseeb', 'ahtisham', 'umar', 'daniyal', 'noman'];
const result = names.filter(name => name.length >= 6);
console.log(result);