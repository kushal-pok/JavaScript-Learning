const { use } = require("react");

const accountId = 1234 //never change
let accountEmail = "nabina1@gmail.com" 
var accountPassword = "1234"
accountCity = "Pokhara" // not use this in every code 
let accountState ; // it gives undefine in out 

// accountId = 2 Not allowed because this is defined by constant
accountEmail ="Nabina12@gmail.com"
accountCity = "Kathamandu"
accountPassword = "4321"


console.log(accountId);
console.table([accountEmail , accountId ,accountPassword, accountCity, accountState]) //Use for print all output in same code


// ----------------------Operations-------------------- 

let value = 3
let negValue = -value // negative value
console.log(negValue);

//operation
let str1 = "kushal"
let str2 = "hello"
let str3 = str1 + str2 
console.log(str3);

console.log("1" + 2); // output:12
console.log(1 + "2");// output:12
console.log("1"+ 2 + 1);// output:121
console.log(1 + 2 + "2");//output:32 this is add 

 //--------------------------------Stack & Heap -------------------------

 let myName = "kushal"
let anotherName ="Nabina"

console.log(anotherName);

let userOne = {
    Email:"nabina@gmail.com",
    Id:1,
}

let userTwo = userOne 

userTwo.Email ="nabina1@email.com"
// console.log(userOne.Email);
// console.log(userTwo.Email);

//------------------------------------ String Syntax-------------------------

const name = "kushal"
const repoCount = 20 

console.log(`My name is ${name} and my repo count in github are ${repoCount}`);


const gameName = new String('Nabina')

console.log(gameName[2]);//acces the string
console.log(gameName.__proto__);//

//string Length
console.log(gameName.length);

//change in uppercase
console.log(gameName.toUpperCase());

//check position of string
console.log(gameName.charAt(3));

//position of character 
console.log(gameName.indexOf('b'));

//change in substrings
const newString = gameName.substring(0,3)
console.log(newString);

//Show space 
const newStringOne = "    kushal     "
console.log(newStringOne);
console.log(newStringOne.trim()); // remove space

// String replace 
const url = "https://kushal.com/"
console.log(url.replace('kushal', 'Nabina'));

console.log(url.includes(".com")); //check the string is avaliable or not

//-----------------------------Numbers & Maths ----------------------------------
//Numbers

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));// add decimal points in numbers


const otherNumber = 23.6452
console.log(otherNumber.toPrecision(3));// how much number show in output


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));// add comas in numbers


 //Maths

console.log(Math); // It is object

console.log(Math.abs(4)); // give abslute values

console.log(Math.round(4.6)); // roundof the number

console.log(Math.min(2 ,3 ,4 ,1)); // print minimum vakues same as max change min to max

//print random value
console.log(Math.random());
console.log(Math.random()*10);

const min = 10
const max = 20

console.log(Math.random() * (max - min +1));

console.log(Math.floor(Math.random() * (max - min +1))+ min);


// ----------------------------------------------- Date and Time ------------------------------------------------

//Date
let myDate = new Date()
console.log(myDate.toDateString());
console.log(typeof myDate);


let myCreatedDate = new Date (2023, 0 ,23)
console.log(myCreatedDate.toDateString());

//Time Stamp

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());

newDate.toLocaleDateString('default',{
    weekday:"long",
    // timeZone:"Kus"
})


//------------------------------------- Arrays ----------------------------------------------
const myArr = [0, "Kushal", 2, 3, 4, 5]
// const myArr2 = new array(1, 2, 3, 4)

console.log(myArr[1]);


//Arrays Methodes
myArr.push(6)// Add the numbers

myArr.pop() // Remove the last value 

myArr.unshift(2) // Shift the value in start

myArr.shift() //Remove the shift value

console.log(myArr.includes(9)); // check the number or value is available or not

console.log(myArr.indexOf(3)); // it also check the number is available or not is output is not given by true or false 

 //Convert into strings
const newArr = myArr.join()
console.log(myArr);
console.log(typeof newArr);


// Slice , splice 

//slice(Dont print the range)
console.log("N",myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
// console.log("B", myArr);

//Splice 
// print the range also
console.log("N",myArr);
const myn2 = myArr.splice(1,3)
console.log(myn2);

// same as push or concat

const newNum = [1, 2, 3, 3, 4]
const newNumb2 =[4, 5, 6, 7]
newNum.push(newNumb2)

console.log(newNum);

//splitout the arrays
const all_new_hero =[ ...newNum, ...newNumb2]
console.log(all_new_hero);

//Another Style 

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

//convert the arrays
console.log(Array.isArray("kushal"));

console.log(Array.from("Nabina"));// convert in arrays

console.log(Array.from({name:"kushal"})); //Its gives you the null array 

//another types of convert array
let score1 = 100
let score2 = 200 
let score3 = 300

console.log(Array.of(score1,score2,score3));

//----------------------------------------Objects ----------------------------------

//Singleton 

// Object literals

const mySym = Symbol("key1")


const jsUser ={
    name:"kushal",
    age:18,
    [mySym]:"mykey1",
    location: "Pokhara",
    Email:"nabina12@gmail,com",
    lastLogginLocations:["Pokhara","Syangja","Kathamandu","Rasuwa"]
}

//Object access styles 
console.log(jsUser.Email);

console.log(jsUser["Email"]);
console.log(typeof jsUser.mySym);


//change the object values
jsUser.name ="Nabina"

//freez the value 
// Object.freeze(jsUser)
// jsUser.name = "Kushal Pokhrel"//This uptade is freez by the object.freez()

console.log(jsUser);



jsUser.greetings = function(){
    console.log("Hello Kushal");
    
}

jsUser.greetingsTwo = function(){
    console.log(`Hello Js User,${this.name}`);
    
}

console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());


const tinderUser = new Object()//singleton object 

const tinderUser2 = {}// Non singleton object

tinderUser.id ="123abc"
tinderUser.name = "Nabina"
tinderUser.isLoggedIn = false


const regularUser = {
    Email : "kushal@gmail.com",
    fullname: {
        userfullname:{
            firstname:"Nabina",
            lastname: "Poudel"
        }
    }
}

console.log(regularUser.fullname);


// combine the object values
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

const obj3 = Object.assign({},obj1 , obj2)
console.log(obj3);

//Array of objects

const newArray = [ // Array

    //objects
    { 
        id:1,
        name:"Kushal",
        Email:"kushalpokhrel"
    },

    {
         id:2,
        name:"nabina",
        Email:"nabinapokhrel"
    }
]
 console.log(newArray[1].Email);

 // De-instructure of objects

const course ={
    coursename:"js by kushal",
    price:"999",
    courseInstructure:"Kushal"
}

const {courseInstructure} = course
console.log(courseInstructure);

// ---------------------------------------- Function ---------------------------
 function sayMyName(){
    console.log("kushal");
    
 }
sayMyName()


function addTwoNumbers(number1, number2){
   console.log( number1 + number2);
   
}

addTwoNumbers(4,4)


function addTwoNumber (num1, num2 ){
    // let result = num1 + num2 // This will also work 
    // return result  
    return num1 + num2 
}
const result = addTwoNumber(100 , 356)
console.log("result:", result);

function loginUserMessage(username = "Nabina"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Kushal"));

//infinite paramaters 
function claculateCartPrice(...numb1){ // (...numb1) is a rest operator
    return numb1
}
console.log(claculateCartPrice(200 , 40000, 100));

const user = {
    username:"kushal",
    price:100
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

handleObject(user)


// ----------------------Global and local scope ------------------------------------------




if(true){
    let a = 10 
    const b = 20
    var c = 30
}

console.log(c);

//Nested scope

function one (){
    const username = "kushal"
    
    function two(){
        const website = "youtube.com"
        console.log(username);
        
console.log(website);
}
 two()
}
one()

// if else case
if(true){
    const username = "kushal"

    if(username === "kushal"){
        const website = "youtube.com"
        console.log(`Hello ${username} welcome to ${website}`);
    }
    // console.log(website);
    
}

// console.log(username)

function addone(num){
    return num +1
}

console.log( addone(5));


const addTwo = function(num){
    return num +2
}
addTwo(5)

// -----------------------------------Arrow function-------------------------------
const user2 = {
    username:"kushal",
    price:100,

    welcomeMessage: function(){
        console.log(`Hello ${this.username}, welcome to the website`); //(this) keyword refer to the current context
    }
}

user2.welcomeMessage()

function nabina(){
    // console.log(this);
    
}
nabina()
 
//Arrow function
const nabina1 = () => {
    let username = "kushal"
    // console.log(this);
}
nabina1()

// add parameter 
const addThree = (num1 , num2) => {
    return num1 + num2 +3
}
console.log(addThree(2 , 3));


//js error handling
let x = 5
let z = 5

try{
    x= z+ x
    console.log(x);
}catch(err){
    let text = err.message
    console.log(text);
}




try{
    let x = 5
    let y = 5
    x= z+ x
    console.log(x);
}catch(err){
    let text = err.message
    console.log(text);
}

//silent Error 
let result1 = "Not Active"
let isActive = false 

if(isActive==true){
    let result1 = "Active"
    return result1 
}
console.log(result1);


// immediately Invoked function expression(IIFE)
(function(){
    console.log("Hello IIFE");
})();

// Arrow IIFE with pass parameter
((name) => {
    console.log(`Hello ${name}! How are you?`);
})("Nabina");   


// ---------------------------------- Call Stack --------------------------------

let value1 = 5
let value2 = 10

function addValues(num1 , num2){
    let total = num1 + num2
    return total
}
let result2 = addValues(value1 , value2)
let result3 = addValues(3,5)
 

//---------------------------------------- Control Statements ----------------------------------











