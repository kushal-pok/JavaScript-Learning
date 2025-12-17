let name = "kushal"
let age = 18
//let isLoggedIn = true // boolean datatypes: only true/false

//null => standalone value
// undefined => 
// bigint 
// symbol => unique


//object 

console.log(typeof "kushal");
console.log(typeof undefined);// undefined
console.log(typeof null);//object

//Datatypes convesrsion confusion

//change in number
let score = 33

console.log(typeof score);

let valueNumber = Number(score)
console.log(typeof valueNumber);//change in numbers
console.log(valueNumber);

// "33"=> 33
//"33abc"=> NaN
// true =>1; false =>0


//change in boolean
let isLoggedIn =1

let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

//1 => true 
// 0 => false
//"kushal" => true
// "" => false


// change in string
let someNumber = 33 

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//comprasion in datatypes
/*
avoid this code 

console.log("2">1);
console.log("02">1);

console.log(null >0);
console.log(null == 0);
console.log(null >= 0);
*/


//===

// console.log("2"===2);//check the datatypes

// datatypes summary 

const core = 100
const coreValue = 100.2

// const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// Arrays 
const heros = ["iron man", "Luffy","Zoro"];
console.log(heros);

let myobj = {
    name:"kushal",
    age:22,
}

const myFunction = function(){
    console.log("Hello Nabina");
}





