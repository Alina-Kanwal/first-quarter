//if else ki condition
let password = 123456;
if (password == 123456) {
    console.log("password is correct");
}
else {
    console.log("Incorrect password");
}
// // let markSheet : number = 90
// // if( markSheet >= 80) {
// //    console.log("You got A+Grade") 
// // }else if(markSheet >= 70) {
// //     console.log("You got 'A' grade ")
// // }else if(markSheet >= 60){
// //     console.log("You got 'B' Grade")
// // }else{
// //     console.log("You are fail")
// // }
// let markSheet : number = 60
// if( markSheet = 80) {
//    console.log("You got A+Grade") 
// }else if(markSheet > 70) {
//     console.log("You got 'A' grade ")
// }else if(markSheet > 60){
//     console.log("You got 'B' Grade")
// }else{
//     console.log("You are fail")
// }
// // // Condition Teneray Operators
// agar true hoga tw first condition ayegi agar false hoga second condition ayegi // is my srf first or second hota hy
let isGuest = false;
let refreshment = isGuest ? "Tea" : "Black coffe";
console.log(`Welcome to home please some have ${refreshment}`);
// let isGuest = false // may false condition ayegi
// let refreshment = isGuest ? "Tea" : "Black coffe"
// console.log(`Welcome to home please some have ${refreshment}`)
// let dress = 10000
// if (dress = 9000){
//     console.log("I will not purchase ")
// }else if(dress = 9000){
//     console.log("I will bargaining untill they give me in 5000")
// }else if(dress = 8000)
//     console.log("I will purchase if it is in Red color")
// else("I will just take some refreshment")
let weather = "Cloudly";
if (weather === "rainning") {
    console.log("Wear a light raincoat");
}
else if (weather === "Cloudly") {
    console.log("Wear a light coat");
}
else {
    console.log("wear a sunglasses");
}
//////////////////////////////////////////////////Switch Statement
let classTiming = "sunday";
switch (classTiming) {
    case "monday":
        console.log("go to your work");
        break;
    case "tuesday":
        console.log('go to class');
        break;
    case "sunday":
        console.log('go to class');
        break;
    default:
        break;
}
//if else ki condition
let practiceDays = "Monday";
if (practiceDays == "Sunday") {
    console.log("I will go to take my onsite class in Governor Sindh");
}
else if (practiceDays == "Monday") {
    console.log("I will practice of my onsite class assigment");
}
else if (practiceDays == "Tuesday") {
    console.log("I will complete my remaining assigments.");
}
else if (practiceDays == "Wednesday") {
    console.log("I will revise my all assigments");
}
else if (practiceDays == "Thursday") {
    console.log("I will take Python class and learn how we work");
}
else if (practiceDays == "Friday") {
    console.log("I will learn HTML and CSS");
}
else {
    console.log("I will enjoy weekend");
}
/////////////////////////////////////MY PRACTISE AFTER CLASS///////////////////////////////////////////////////
///if else condition///
let inMarket = "Pinkdress";
if (inMarket == "Pinkdress") {
    console.log("I will purchase");
}
else if (inMarket == "Reddress") {
    console.log("i will purchase if it is in pure red color");
}
else {
    console.log("I will not purchase any dress");
}
////////////////////////////////Switch statement///////////////////////////////////////
let week = "thursday";
switch (week) {
    case "monday":
        console.log("This day start after weekend");
        break;
    case "tuesday":
        console.log("This is the second working day");
        break;
    case "wednesday":
        console.log("this is mid day of week");
        break;
    case "thursday":
        console.log("It is thursday. the weekend is sight");
    case "friday":
        console.log("Last workday! finish strong.");
    default:
        console.log("Enjoy weekend");
        break;
}
////////////////some extra/////////////
// console.log(`'hello' + 'world' `)
// console.log(2**3)
// console.log(5 !== 5)
// console.log(10 <= 5)
/////////////////Practice
//************************************************if else
let name = "Haniya";
if (name == 'hunain') {
    console.log("He is our Teacher of AI");
}
else if (name == "haniya") {
    console.log("she is my friend");
}
else {
    console.log("I do not know the person");
}
export {};
