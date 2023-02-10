
// Array.forEach()


const array1 = ['arifeen', 'ahsan', 'basit', 'ubaid','noman','kashif',
                'habibullah','ahsaan','uzair','haseeb',];

array1.forEach(element => console.log(element));




    // Creating a map using Map object
    let mp=new Map()
     
    // Adding values to the map
    mp.set("arifeen",1);
    mp.set("ahsan",2);
    mp.set("basit",3);
    mp.set("ubaid",6);
    mp.set("noman",7);
    mp.set("kashif",10);
    mp.set("habibullah",13);
    mp.set("ahsaan",14);
    mp.set("uzair",15);
    mp.set("haseeb",16);
     
    // Logging map object to console
    mp.forEach((values,keys)=>{
      console.log(values,keys)
    })


//  Array.filter()
// voting

   let people = [
    {name: "arifeen",age: 65},
    {name: "ahsan",age: 2},
    {name: "basit",age: 13},
    {name: "ubaid",age: 3},
    {name: "noman",age: 25},
    {name: "habibullah",age: 10},
    {name: "ahsaan",age: 43},
    {name: "uzair",age: 25},
    {name: "haseeb",age: 1},
    {name: "kashif",age: 43}
]

let toddlers = people.filter(person => person.age >= 18)

console.log(toddlers)