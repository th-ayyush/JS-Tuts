//LOOPS

// for(let count=1;count<=1000;count++){
//     console.log("ayush");
// }

//for-of loop
// let str="ayush";
// let size=0;
// for(let i of str){
//     console.log(i);
//     size++;
// }

// console.log("string size = ",size);


//for-in loop
//it returns the keys of the object

// let student={
//     name:"ayush",
//     course:"CSE",
//     cgpa:7.5,
//     isPass:true
// };

// for(let key in student){
//     // console.log(i);
//     console.log("key=",key,"value=",student[key]);
// }




//PRACTICE QUESTIONS

//QUES.1 Print all even numbers from 0 to 100

// for(let num=0;num<=100;num++){
//     if(num%2 !==0){
//         console.log("num=",num);
//     }
// }


//Ques.2 Create a game where you start with any random game number.Ask the user to keep guessing the game number until the user enters correct value.

// let gameNum=25;
// let userNum=prompt("Guess the game number:");

// while(userNum != gameNum){
//      userNum=prompt("you entered wrong number,Guess again:");
// }
// console.log("congrats ,you entered the right number")


//                          STRINGS

// TEMPLATE LITERALS
// strings written within `  `
//  let obj ={
//     item:"pen",
//     price:10
//  };

//  let output =` the cost of ${obj.item} is ${obj.price} rupees`;
//  console.log(output);



 //STRING methods



 //PRACTICE QUESTIONS

 //QUES.1 Prompt the user to enter their full names .Generate a username for them based on the input.Start username with @ ,followed by their fullname and ending with the fullname length.

//  let userName = prompt("Enter your fullname");
//  console.log("Your username is " + "@"+userName+userName.length);
