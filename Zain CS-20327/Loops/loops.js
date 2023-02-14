
// for each loop


const array1 = ['asad', 'ali', 'akram', 'habib','zahid','noman',
                'uzair','basit','ubaid','zain',];

array1.forEach(element => console.log(element));




// map looping 
    let map=new Map()
     
    // Adding values to the map
    map.set("asad",1);
    map.set("ali",2);
    map.set("akram",3);
    map.set("habib",4);
    map.set("zahid",5);
    map.set("noman",6);
    map.set("uzair",7);
    map.set("basit",8);
    map.set("ubaid",9);
    map.set("zain",10);
     
    // Logging map object to console
    map.forEach((values,keys)=>{
      console.log(values,keys)
    })


//  filter in loop


    const words = ['arifeen', 'ahsan', 'basit', 'ubaid','noman','kashif',
                'habibullah','ahsaan','uzair','haseeb'];

const result = words.filter(word => word.length >= 6);

console.log(result);