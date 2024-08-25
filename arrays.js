// let marks = [65,45,75,85,78]
// console.log(marks);

/**LOOPING OVER ARRAY */

// let heros =["ironman","hulk","thor","thanos","antman"]
// //FOR LOOP
// for ( let idx=0; idx<heros.length; idx++)
//  console.log(heros[idx]);

// //FOR OF
// for (let hero of heros){
//     console.log(hero);
// }


/***PRACTICE */

// let marks = [85,97,44,37,76,60]

// let sum = 0;
// for (let val of marks){
//     sum = sum + val;

// }
// let avg = sum / marks.length;
// console.log(avg)

/**PRAC2 */
// let item = [250,645,300,900,50]
// let i = 0;
// for (let val of item){
//     console.log('value at index ${}}');
//     i++;
// }

/*** EK BARI PHIR SE DEKH LIYO UPAR WALA */

/*** ARRAYS METHODS */
// let name = ["manik","anmol","aditya", "sao"]
// // name.push("jin","pin","kin")
// // console.log(name)
// // name.pop("kin", "lin")
// // console.log(name)
// console.log(name.toString());

// let marvel_hero = ["thor","ironman","hulk"]
// let dc_hero = ["superman","batman","joker"]

// // console.log(marvel_hero.concat(dc_hero))

// // console.log(marvel_hero.unshift("antman"));

// let val = marvel_hero.shift();
// console.log("deleted", val);

// let hero = ["thor","spidermon","hulk","captain","groot","loki"]
// console.log(hero);

// console.log(hero.slice(1,2));
// console.log(hero.splice(2,4));

// let arr = [1,2,3,4,5]
// arr.splice(2,0,15);

//deleted element
// arr.splice(2,1);

//replace element
// arr.splice(3,1,101)

/***PRACTICE */
// let arr = ["bloomberg","microsoft","uber","google","ibm","netflix"]
// arr.shift();
// arr.splice(2,1,"ola");
// arr.push("amazon")

/***FOR EACH LOOP IN ARRAY */

// let arr =["delhi", "kolkata", "mumbai"]
// arr.forEach((val) => {
//     console.log(val.toUpperCase());
// });

/***PRACTICE */
// let num = [2,3,4,5,6];
// num.forEach((num)=>{
//     console.log(num*num);
// })

/***MAP METHOD*/

// let num = [65,87,54]

// let newnum = num.map((val)=>{
//     return val *2;
// })
// num.map((num)=>{
//     console.log(num*num);

// });


/**FILTER ARR */

// let arr =[1,2,3,4,5,6,7]
// let evenarr = arr.filter((val)=>{
//     return val%2   === 0; // val>3 and more
// });

// console.log(evenarr);

/*** REDUCE METHOD */

// let arr =[1,2,3,4]
// const result=arr.reduce((res,curr)=>{
//     return res+curr;
// });

// console.log(result);//1+2+3+4

//largest number in array?*/

// let arr = [5,4,7,2,9,8]
// const output = arr.reduce((prev,curr)=>{
//     return prev>curr? prev:curr;
// });
// console.log(output)

/***PRACTICE */

// let marks = [97,54,68,25,74,85,90,95];
// let topper = marks.filter((marks)=>{
//     return marks > 90;
// })
// console.log(topper);

/**pract2 */
//  let n = prompt ("enter the number:");
//  let arr = [];
//  for (let i=1;i<=n; i++){
//      arr[i-1] = i;//1(0), 2(1),3(2)
//  }
//  console.log(arr);

//  let sum=arr.reduce((res,curr)=>{
//      return res + curr;
//  })
//  console.log(sum);

//  let factorial = arr.reduce((res,curr)=>{
//     return res*curr;
//  })
//  console.log(factorial);