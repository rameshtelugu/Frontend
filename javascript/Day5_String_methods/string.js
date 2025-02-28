// var str="Akhil,Sampath,Chinnod";
// console.log(str.substring(6,13));  //substring()
 
// var str="Akhil,Sampath,Chinnod";
// console.log(str.substr(0,5));  //substr()

// var str="Akhil,Sampath,Chinnod";
// var text=str.slice(6);
// var a=str.slice(-15);
// console.log(text);
// console.log(a);  //slice()

// var str="Hello world";
// // var res=str.includes("e");
// // var res=str.includes("");
// var res=str.includes(" ");      //includes()
// console.log(str);
// console.log(res);


//  var str="aGoodmorning"
// console.log(str.charAt(3));   
// console.log(str.charCodeAt(0)); //charCodeAt() gives the ascii values
//  var str="aGoodmorning"
//  console.log(str.charAt(str.length-1));  // printed "g"
//  console.log(str.length-1);   // printed length "11"

//  var fName="Ramesh";
//  console.log(fName.split(""));
// console.log(str.at(1));  //o;
// str=str.replace("Evening","Night");
// var res=str.replaceAll("E","e")
// console.log(str);
// console.log(res);

// console.log(str);
// str=str.trim();
// console.log(str);  //trim()

// console.log(str.concat("Evening")) concat()

var date=new Date();
console.log(date);
console.log(typeof date); // type is object
console.log(date.toLocaleDateString());  //date month year
console.log(date.toLocaleTimeString()); //Time
console.log(date.toLocaleString()); //date month year,time
// document.write(date.toLocaleString());
console.log(`today's date is ${date.getDate()}`);
console.log(`today's Month is ${date.getMonth()+1}`);
console.log(`today's day is ${date.getDay()}`);
console.log(`today's year is ${date.getFullYear()}`);
console.log(`Time in hours is ${date.getHours()}`);
console.log(`Time in Minutes is ${date.getMinutes()}`);
console.log(`Time in seconds is ${date.getSeconds()}`);


