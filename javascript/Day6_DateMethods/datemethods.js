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
