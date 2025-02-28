// var car =
// {
//     brand:"Mahindra",
//     model: "xuv7oo",
//     color:["blue","black","white"],
//     price:"45Lakh",
//     capacity:7,
//     variant:"petrol",
//     "d-o-f":"10-12-2022",
//     availability:"true"

//     }
//     console.log(car);

//     //using dot notation
//     //---------------------
//     console.log(car.brand);
//     console.log(car.model);
//     console.log(car.color);
//     console.log(car.capacity);
//     console.log(car.variant);
//     console.log(car["d-o-f"]);
//     console.log(car.price);
//     console.log(car.availability);

//     console.log("--------------------------");
    
//     //using ["Key"] notation
//     //-------------------------
//     console.log(car["brand"]);
//     console.log(car["model"]);
//     console.log(car["color"]);
//     console.log(car["price"]);
//     console.log(car["capacity"]);
//     console.log(car["variant"]);
//     console.log(car["d-o-f"]);
//     console.log(car["availability"]);

//     // car.milage="20kmpl"
//     car["milage"]="20kmpl"
//     car.availability=false; //updation
//     delete car["d-o-f"];
//     console.log(car);


// assignment
//  var Marker ={
//       ink:"black",
//       price:25,
//       brand:"camlin",
      
//  }
//  console.log(Marker);
//  console.log(Marker.price)
//  Marker.ink="blue";
//  delete Marker["brand"]
//  Marker.shape="cylinder"
//  console.log(Marker);

//object creation for Employee
var Employee={
    name:"Akhil",
    age:25,
    salary: 25200.20,
    skills:["java","Frontend","Ms Office","Excel"],
    // address:{
    //     area:"Kurnool",
    //     pincode:518218,
    //     street:"Krishna Nagar",
    //     Road: 7
    // }
}
// console.log(Employee)
// console.log(Employee.skills[2])
// console.log(Employee["skills"][0])
// console.log(Employee["address"])
// console.log(Employee["address"]["street"]);
// Employee.address["pincode"]=50085
// console.log(Employee.address["pincode"])

 console.log(object.keys(Employee)); // all keys
 console.log(object.values(Employee)); // all values
 console.log(object.entries(Employee)); // both keys and values