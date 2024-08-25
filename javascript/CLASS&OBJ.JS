// const student = {
//     fullname: "manik",
//     marks: 50,
//     printmarks: function(){
//         console.log("marks=", this.marks);
//     }
// };

/**PROTOTYPEES */

// const employee = {
//     caltax(){  // same as caltax:function()
//         console.log("tax is 10%")
//     }
// };

// const karanarjun = {
//     slaray:50000,
//     caltax(){
//         console.log("tax is 20%")
//     }
// };

// const karanarjun2 = {
//     slaray:50000,
// }

// karanarjun.__proto__ = employee;
// karanarjun2.__proto__ = employee;

/***CLASS IN JS */

// class Nissancar{
//     constructor(){
//         console.log("create new obj")
//     }
// start(){
//     console.log("start");
//     }
// stop(){
//     console.log("stop")
//     }

// setbrand(brand){
//     this.brandname = brand;
//     }
// };

// let fortuner = new Nissancar();//constructor
// fortuner.setbrand("fortuner");
// let tuner = new Nissancar();
// tuner.setbrand("tuner");

/**INHERITANCE IN JS */

// class parent {
//     hello(){
//         console.log("hello")
//     }
// }

// class child extends parent{}

// let obj = new child()

/**example2 */

// class parent{
//     constructor(){
//         this.species = "homo sapien";
//     }
//     eat(){
//         console.log("eat");
//     }
//     work(){
//         console.log("do nothing");
//     }
// }

// class engineer extends parent {
//     work(){
//         console.log("solve the problem")
//     }
// }

// class doctor extends parent{
//     work(){
//         console.log("treat us!!")
//     }
// }

// let obj = new engineer("chemical engg");

/***SUPER */

// class person{
//     constructor(){
//         this.species = "homo sapien";
//     }
//     eat(){
//         console.log("eat");
//     }
//     work(){
//         console.log("do nothing");
//     }
// }

// class doctor extends person {
//     constructor(branch){
//         super(); //to involve parent class constructor
//         this.branch = branch;
//     }
//     work(){
//         console.log("solve the problem")
//     }
// }

// let newobj = new doctor("chemical engg")

/***    PRACTICE   */
// let data = "secret info";

// class user{
//     constructor(name , email){
//         this.name = name
//         this.email = email;
//     }

//     viewdata() {
//         console.log("data=" , data);
//     }
// }

// class admin extends user{
//     constructor(name,email){
//         super(name,email);

//     }
//     editdata(){
//         data = "some new value";
//     }
// }

// let stud1 = new user("manik", "manik@gmail.com")
// let stud2 = new user("anmol", "anmol@gmail.com")

// let admin1 = new admin("admin", "admin@gmail.com");

/***ERROR HANDING */

let a =5;
let b=5;
console.log("a=",a)
console.log("b=",b)
console.log("a+b=", a+b)
console.log("a-b=", a-b)
try{
    console.log("a*b=", a*c)
}catch(err){
    console.log(err);
}

console.log("a/b=", a/b)