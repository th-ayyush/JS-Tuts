//ARRAYS

// let marks=[97,82,75,64,36];
// console.log(marks);
// console.log(marks.length);//property

//looping over an array
// for(let idx=0;idx<marks.length;idx++){
//     console.log(marks[idx]);
// }

//for of
// for(let mark of marks){
//     console.log(mark);
// }

//PRACTICE QUESTION

//Ques.1 For a given arrray of marks of students .Find average marks of entire class.

// let marks=[67,45,34,89,67];
// let sum=0;
// for(let val of marks){
//     sum+=val;
// }
// let avg=sum/marks.length;
// console.log(`avg marks of the class =${avg}`);


//Ques.2
// let items=[250,645,300,900,50];
// for(let i=0;i<items.length;i++){
//     let offer = items[i]/10;
//     items[i]-=offer;
// }
// console.log(items);


//ARRAY METHODS
// foodItems=["potato","apple","chawanprash","oreo"];


//PRATICE QUETSIONS

//QUES.NO 1 Create an arrray to store companies

// let companies=["Bloomberg","microsoft","uber","google","IBM","Netflix"]

//a. Remove the first company from the array
// companies.splice(0,1);


//b.Remove Uber & add OLA in its place
// companies.splice(1,1,"OLA");


//Add amazon at the end
// companies.splice(5,0,"Amazon");
// console.log(companies);