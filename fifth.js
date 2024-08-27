//                 FUNCTIONS

// function myFunction(){
//     console.log("ayush");
// }

// myFunction();



//function with argument

// function myFunction(msg){
//     console.log(msg);
// }
// myFunction("hye");

// function sum(x,y){
//     s=x+y;
//     return s;
// }
// let val=sum(3,4);
// console.log(val);

//Arrow functions
// const multiply = (x,y) =>{
//     m=x*y;
//     return m;
// }
// let g=multiply(6,7);
// console.log(g);



// Pratice questions

//QUES.NO. 1 Create a function using the "function" keyword that takes a string an argument & returns the number of vowels in the strings.

// function countVowels(str){
//     let count=0;
//     for (const char of str){
//         if(char==="a" || char==="e" || char==="i" || char==="o" ||char==="u"){
//             count++;
//         }
//     }
//     console.log(count);
// }

//ques.2 make arrow function for the same



// forEach loops in arrrays
//(val,idx,arr) are 3 parameters for forEach loop
// let arr=[1,2,3,4,5];
// arr.forEach(function printVal(val,idx,arr){
//     console.log(val,idx,arr);
// });



//Practice questions

//For a given array of numbers ,print the square of each value using the forEach loop.
// let arr=[5,7,9,4,3];
// arr.forEach(function square1(val){
//     console.log(val*val);
// })


//      SOME MORE ARRAY METHODS
// MAP= Creates new array with results of some operation.The value its callback returns are used to form new array

// let nums=[65,52,39];
// let newArr=nums.map((val)=>{
//     return val*2;
// });
// console.log(newArr);

//FILTER= Create new array of element that give true for filter.

// let newArr=arr.filter((val)=>{
//     return val%2==0;
// })

//REDUCE= Performs some operations & reduces the array to single value.It returns that single value.

// let arr=[1,2,3,4];
// const output=arr.reduce((res,curr)=>{
//     return res+curr;
// });

//Practice questions

//QUES.NO.1 We are given array of marks of students.Filter out the marks of students that scored 90+.

// let marks=[87,93,64,99,86];
// let max=marks.filter((val)=>{
//     return val>=90;
// });

// console.log(max);

//QUES.NO.2 Take anumber n as input from userr.Create an array of  numbers from 1 to n.
//Use the reduce method to find the sum of all numbers in the arrray
//use reduce method to fimd the product of all numbers in the array

// let n =prompt("enter a number");
// let arr=[];
// for(let i=1;i<=n;i++){
//     arr[i-1]=i;
// }
// console.log(arr);
// const output=arr.reduce((res,curr)=>{
//     return res*curr;  //res+curr
// })
// console.log(output);