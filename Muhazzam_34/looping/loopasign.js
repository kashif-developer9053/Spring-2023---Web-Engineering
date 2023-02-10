
// for each loop


const array1 = ['arifeen', 'ahsan', 'basit', 'ubaid','noman','kashif',
                'habibullah','ahsaan','uzair','haseeb',];

array1.forEach(element => console.log(element));




// map looping 
    let map=new Map()
     
    // Adding values to the map
    map.set("arifeen",1);
    map.set("ahsan",2);
    map.set("basit",3);
    map.set("ubaid",6);
    map.set("noman",7);
    map.set("kashif",10);
    map.set("habibullah",13);
    map.set("ahsaan",14);
    map.set("uzair",15);
    map.set("haseeb",16);
     
    // Logging map object to console
    map.forEach((values,keys)=>{
      console.log(values,keys)
    })


//  filter in loop


    const words = ['arifeen', 'ahsan', 'basit', 'ubaid','noman','kashif',
                'habibullah','ahsaan','uzair','haseeb'];

const result = words.filter(word => word.length >= 6);

console.log(result);