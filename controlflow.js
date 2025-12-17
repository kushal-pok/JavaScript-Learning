// if statement 

const { use } = require("react");

if (true){ // if you change true to false, the block will not execute
    console.log("This will always execute.");
}

const isUserLoggedIn = true
const temperature = 41

if (temperature < 50) {
    console.log("Temperature is less than 50");
}else{
     console.log("Temperature is 50 or more");
}
   
// console.log("----------------------------------");
const score = 200

if (score >= 100) {
    const power ="You have reached the next level!";
    console.log(`User Score:${power}`);
    
}else{
    console.log("Keep trying to reach the next level.");
}

// Short hand notation

const balance = 500
// if(balance > 250) console.log("You have sufficient balance.");

if (balance < 250){
    console.log("less then");
}else if (balance < 400){
    console.log("less then 400");
}else if (balance < 600){
    console.log("less then 600");
}else{
    console.log("more then 600");
}

// Real life uses

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromFacebook = true

if (userLoggedIn && debitCard){
    console.log("Allow to purchase product");
}

if(loggedInFromGoogle || loggedInFromFacebook){
    console.log("User logged in");
}

// Nullish coalescing operator (??): null undefined
let val1;
// val1 = 5 ?? 10 // it will take the first value
// val1 = 0 ?? 15 // it will take the first value
// val1 = null ?? "Nabina" // it will take the second value
//  val1 = undefined ?? 15 // it will take the second value
val1 = null ?? 10 ?? 25 // it will take the first defined value

console.log(val1);

// Ternary operator
condition ? true : false // syantax

const iceTeaPirce = 100
iceTeaPirce >= 80 ? console.log("Greater then 80") : console.log("Less then 80");

// -----------------------------------------Switched statements---------------------
const month = 3 

switch (month) {
    case 1:
        console.log("January");
        break; // Break the control flow of code 

        case 2:
        console.log("February");
        break;

        case 3:
        console.log("March");
        break;

        case 4:
        console.log("April");
        break;

        case 5:
        console.log("May");
        break;
        
    default:
        console.log("Invalid month");
        break;
}


// truthy and falsy values
const userEmail ="nabina@gmail.com"

if (userEmail){
    console.log("User email is verified");
}else{
    console.log("Please verify your email");
}

if(userEmail.length === 0){
    console.log("array is empty");
    
}

const emotyObj = {}

if(Object.keys(emotyObj).length === 0){
    console.log("Object is empty");
}

// -------------------------------------- For loop -----------------------------------------------

for (let i = 1; i <= 5; i++){
    console.log(`Iteration number: ${i}`);
}