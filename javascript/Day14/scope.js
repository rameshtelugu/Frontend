// scope{}

// local scope
// function test() {
//     var x =10;
//     console.log(x); //10
// }
// test();
// console.log(x); //reference error

//global scope

// var x =10;
// function test() {
    
//     console.log(x); //10
// }
// test();
// console.log(x);

// var x=10;
// function test()
// {
//     var x=100;      // first local scope is executed
//     console.log(x);
    
// }
// test();
// console.log(x);     //second global scope is executed


// parent child inherit

// var x=100;
// function outer()
// {
//     // console.log(x);
//     function inner()
//     {
//         // var x=100;
//         console.log(x);
        
//     }
//     inner()
    
// }
// outer();
// console.log(x);

// closure property outer
// function outer()
// {
//     var x=100;
//     function inner()
//     {
//         console.log(x);
        
//     }
//     inner();
//     console.log(x);
    
// }
// outer();
// closure property inner

// console.log("start");
// function outer()
// {
//     function inner()
//     {
//         var x=100;
//         function sub()
//         {
//             console.log(x);
//         }
//         sub()
//     }
//     inner();  
// }
// outer();



function outer()
{
    return function inner() {
        console.log("hello");
    }
    //return inner
}
outer()()
//var res=outer();
//console.log(res);
//res()