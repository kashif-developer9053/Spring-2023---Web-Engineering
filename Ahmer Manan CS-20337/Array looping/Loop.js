
// For each loop in array


const array = ['asad', 'amir Khan', 'Saad', 'Saeed','Malik','Siddique',
                'Kamran','Ahmer','Jameel','Haseeb',];

array.forEach(element => console.log(element));




// map in looping array
    let map=new Map()
     
    // Adding values to the map
    map.set("asad",1);
    map.set("amir Khan",2);
    map.set("Saad",3);
    map.set("Saeed",6);
    map.set("Malik",7);
    map.set("Siddique",10);
    map.set("Kamran",13);
    map.set("Ahmer",14);
    map.set("Jameel",15);
    map.set("Haseeb",16);
     
    // Logging map object to console
    map.forEach((values,keys)=>{
      console.log(values,keys)
    })


//  filter in loop . array


    const name = ['Ahmed', 'Anees', 'Abid', 'Basheer','Nabeel','Parvaiz',
                'Bakhtawar','Najam','Saleem','Mallik'];

const result = name.filter(name => name.length >= 6);

console.log(result);