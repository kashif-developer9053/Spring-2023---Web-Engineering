
// For each loop in array


const array = ['Muhammad Arifeen', 'Ehsaan Zahoor', 'Huzaifa', 'Nomi','Adeel Ahmed','Kashif Rehman',
                'Habibullah','Ahsaan','Alyas','Fahad',];

array.forEach(element => console.log(element));




// map in looping array
    let map=new Map()
     
    // Adding values to the map
    map.set("Muhammad Arifeen",1);
    map.set("Ehsaan Zahoor",2);
    map.set("Huzaifa",3);
    map.set("Nomi",6);
    map.set("Adeel Ahmed",7);
    map.set("Kashif Rehman",10);
    map.set("Habibullah",13);
    map.set("Ahsaan",14);
    map.set("Alyas",15);
    map.set("Fahad",16);
     
    // Logging map object to console
    map.forEach((values,keys)=>{
      console.log(values,keys)
    })


//  filter in loop . array


    const name = ['Arifeen', 'Ahsan', 'Abdul Basit', 'Ubaid','Noman','Kashif Rehman',
                'Habibullah','Ahsaan','Uzair','Haseeb'];

const result = name.filter(name => name.length >= 6);

console.log(result);