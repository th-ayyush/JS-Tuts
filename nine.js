//CALLBACK

// setTimeout(()=>{
//     console.log("HELlo")
// },10000);

// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }

// calculator(1,2,sum);

//CALLBACK HELL
// function getData(dataId,getNextdata){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextdata){
//             getNextdata();
//         }
//     },2000);
// }

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3);
//     });
// });




//PROMISE

// let promise=new Promise((resolve,reject)=>{
//     console.log("I am a promise");
//     reject("SOME ERROR");
// });


// const getPromise= () =>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am a promise");
//         resolve("success");
//     });
// };

// let promise=getPromise();
// promise.then((res)=>{
//     console.log("promise nfulfiled",res);
// });

// promise.catch((err)=>{
//     console.log("rejected",err);
// });


//Promise chain



//ASYNC-Await

// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weather data");
//             resolve("success");
//         },2000);
//         });
// }

// async function getWeatherData(){
//     await api();//1st call
//     await api();//2nd call
// }

// getWeatherData();