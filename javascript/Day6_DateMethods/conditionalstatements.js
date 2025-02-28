// var x=2;
// if(x%2==0)
// {
//     console.log(`even`);
// }
// else
// {
//     console.log(`odd`);
// }
 
var marks=prompt("Enter the Marks");
if((marks<=100) && (marks>=80))
{
    console.log(`Grade-A`);
}
else if((marks<=79) && (marks>=60))
{
    console.log(`Grade-B`);
}
else if((marks<=59) && (marks>=50))
{
    console.log(`Grade-C`);
}
else if((marks<=49) && (marks>=40))
{
    console.log(`Grade-D`);
}   
else if((marks<=39) && (marks>=35))
{
    console.log(`Grade-E`);
}
else
{
    console.log(`Fail`);
}