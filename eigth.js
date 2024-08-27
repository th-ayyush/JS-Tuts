//                         CLASSES AND OBJECTS

// const student={
//     fullName:"ayush jaiswal",
//     marks:22,
//     printMarks: function(){
//        console.log("marks=",this.marks);
//     }
// };

//Prototype is another object which is atttached with every class ,which contains the pre-defined methods which can be implemented on the class


// const employee={
//     calcTax(){
//         console.log("the tax rate is 10%");
//     },
// };

// const karanArjun={
//     salary:50000,
// };

// karanArjun.__proto__ = employee;

// karanArjun.calcTax();


//If an object and in its prototype same function exists,then then function in the object will get priority



// const employee={
//     calcTax(){
//         console.log("the tax rate is 10%");
//     },
// };

// const karanArjun={
//     salary:50000,
//     calcTax(){
//         console.log("the tax rate is 20%");
//     },

// };

// karanArjun.__proto__ = employee;

// karanArjun.calcTax();



// CLASSES- Template for creating objects


// class toyotaCar{
//     constructor(brand,mileAge){
//         console.log('creating new object:');
//         this.brand=brand;
//         this.mileAge=10;
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
//     // setBrand(brand){
//     //     this.brandName=brand;
//     // }
// }

// let fortuner = new toyotaCar("fortuner",10);


//INHERITANCE


// class person{
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
// }

// class engineer extends person{
//     work(){
//         comsole.log("let's build something")
//     }
// }

// let ayuhsObj=new engineer();
// if child and parent have same method ,then child method will get priority ,which is also called method




//SUPER keyword- used to call constructor of its parent class to acces parents porperties

// class person{
//     constructor(){
//         console.log("enter parent constructor");
//         this.species="homo sapiens"
//     }
//     eat(){
//         console.log("eat");
//     }
// }

// class engineer extends person{
//     constructor(branch){
//         console.log("enter the child constructor");
//         super();//to invoke parent class constructor
//         this.branch=branch;
//         console.log("exit child constructor");
//     }
//     work(){
//         console.log("let's build something")
//     }
// }

// let engObj=new engineer("chemical engineer");





// PRACTICE QUESTIONS

//Ques.no.1 You are creating a website for your college.Create a class user with 2 properties ,name & email.It also has a method  called viewdata() that allows user to view website data.

let data="secret information";
class user{
    constructor(name,email){
        this.name =name;
        this.email=email;
    }
    viewdata(){
        console.log("data=",data);
    }
}

class Admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        data="some new value";
    }
}
let student1=new user("ayush","th_ayyush");
let student2=new user("devender","ds@gmail.com")

let admin1=new Admin("admin","admin@gmail.com")


//Ques.no.2 Create a new class Admin which inherits from user .Add a new method called editData that allows it to edit website data.

//                   EXCEPTION HANDLING


let a=10;
let b=18;
console.log("a=",a);
console.log("b=",b);
console.log("a+b=",a+b);
console.log("a+b=",a+b);
try{
console.log("a+b=",a+b);
}catch(err){
    console.log(err);
}
console.log("a+b=",a+b);
console.log("a+b=",a+b);