/***Callbacks, Promises & Async-Wait */

// function heloo(){
//     console.log("heloo")
// }
// setTimeout(heloo,2000)

// method 2

// setTimeout(() => {
//     console.log("heloo");
// },4000)

// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("5");
// },3000); //timeout.

// console.log("three");
// console.log("four");

/**CALLBACK */

// function sum(a,b){
//     console.log(a+b)
// }

// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }
// calculator(1,2,sum);

//Nesting (IF/ELSE) also (LOOPS)

// let age = 19;
// if(age>=18){
//     if(age>=60){
//         console.log("seniior")
//     }else{
//         console.log("middle")
//     }
// }else{
//     console.log("child");
// }

/***CALLBACK HELL */

// function getdata(dataid, getNextData){
//     setTimeout (() => {
//         console.log("data", dataid);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }

// getdata(1, () => {
//     console.log("getting data2...")
//     getdata(2 , () => {
//         console.log("getting data3...")
//         getdata(3, () => {
//             console.log("getting data4...")
//             getdata(4);
//         });
//     })
// })


/***PROMISES */

// let promise = new Promise((resolve,reject) => {
//     console.log("i am a promise")
//     resolve(123); // reject()
// })


// function getdata(dataID,getNextData){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("data=",dataID);
//             resolve("sucess")
//             if (getNextData){
//                 getNextData();
//             }    
//         },4000)
//     })
// }


    
// const getpromise = () =>{
//     return new Promise((resolve,reject) => {
//         console.log("shut the fuck up");
//         resolve("sucess");
//     })
// }
  
/***then catch */

// let promise = getpromise();
// promise.then(() => {
//     console.log("promise fulfilled")
// })

// promise.catch(() => {
//     console.log("rejected")
// })

/***ASYNNN FUNCTION */

// function asyncfun2(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("sucess");

//         },3000)
//     })
// }

// console.log("fetching data1....")
// let p1 = asyncfun2();
// p1.then((res) => {
//     //console.log(res);
//     console.log("fetching data ...")
//     let p2 = asyncfun2();
//     p2.then((res) => {})
// })

//promise chain

// function getdata(dataID,getNextData){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("data=",dataID);
//             resolve("success")
//             if (getNextData){
//                 getNextData();
//             }    
//         },2000)
//     })
// }

// getdata(1)
// .then(() => {
//     return getdata(2)
// })
// .then(() => {
//     return getdata(3)
// })
// .then(() => {
//     console.log(res);
// })


/***async-AWAIT */

// function api(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(100);
//         },2000);
//     })
// }




// async function gettweatherdata(){
//     await api();//1st call
// }

/**async-wait
 */

// function getdata(dataID,getNextData){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("data=",dataID);
//             resolve("success")     
//         },2000)
//     })
// }

//async-await
// async function getalldata(){
//     await getdata(1);
//     await getdata(2);
//     await getdata(3);
// }

//IFEE 
// (async function getalldata(){
//     await getdata(1);
//     await getdata(2);
//     await getdata(3);
// }) ();