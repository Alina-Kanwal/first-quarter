"use strict";
// ///////////////// Basic function///////////////////////////////////////
// for doing repeated work //
// things which perfom again & again
// for example button or fan / button function hy
//make one time get benefit many times
// we follow Dry rule (Don't repeat yourself)
Object.defineProperty(exports, "__esModule", { value: true });
// // "void" does not return any thing // we can correct mistakes one time
// //function ka name hy greet
// function _greet(num: number){ /// empty rakha hy return ni ayega is my 
//     // argument or parameter jb chahye hota jb return chahye ho
//            console.log("Hello world")
//            console.log("How are you")
//            console.log("What is your name")
//            console.log("How old are you")
//  }
// _greet(4)/// this is the way of calling function
// // greet()
// // greet()
// // greet()
// // // /// Use PARAMETER in FUNCTION// 
// function addNumbers(num1 : number , num2: number){
//     const sum = num1 * num2
//     console.log("Sum:" , sum)
//  }
// addNumbers(5 , 3)   // addNumbers(5 , 3) yahan 5 0r 3 arguments hain 
// // ///////SECOND EXAMPLE//////////////////
// function devideNumbers(num3:number, num4 : number) {
//     const sum = num3 / num4
//     console.log("Sum:" , sum)
// }
// devideNumbers(8 , 2)
// // ///////////Third example/////////
// function plusNumbers(num4:number, num5 : number) {
//     const sum = num4 + num5
//     console.log("Sum:" , sum)
// }
// // plusNumbers(8 , 2)
// // // static // fixed
// // //dynamic // we can change 
// // // /////////////////////// return function///////////////////////////// it comes in {} may jo ayega wo block scope 
// //called hoga
// // // agar block scope ky bahar b h chahye jo let kea gaya hy tw return use krna hoga
// // /// parameter may kaii option hoty hain // is may alina dubara ab hum dubara use kar ni sakty
// function meeting(name : string, name1 : string){// function my call hoga ye 
//       let message = "How are you?"
//       console.log(name +""+ message)
//       console.log(name1 +""+ message )
// }
// meeting("Alina " , "wahiba ")
// let _userName = meeting //("bhai")
// function meeting2(personName: string = "bhai" ){
//     console.log("Hi how are you" , personName)
//     return personName
// }
// let userName = meeting2("bhai")   // yahan hum ny is varaible ko dynamic bana dea 
//                                   // taky agay bh use karsaky
// console.log(userName  , "is my best friend") // yahan use kea hy
// console.log(userName  , "What do you eat?")
// function meeting3(personName: string ){
//     console.log("Hi" + personName)
//     return personName
// }
// meeting3("Alina")
// //////////////////////////////My practise////////////////////////////////////////
// ////////////BASIC FUNCTION////////////////////////
// // ////MY PRACTISE FROM SLIDES OF AI///////////////
// function halfryegg(){
//     let cooked = 1 + 2 + 3
//     console.log( "my egg:" , cooked)
// }
// halfryegg()
// ///////////////////RETURN FUNCTION///////////////////////////
// function halfryegg1(){
//     let cooked1 = 1 + 2 +7
//     return cooked1
// }
// let result : number = halfryegg1()
// console.log(result)
// console.log("the age takes ", result , "ingrediants")
function halfryegg2(egg, salt, butter) {
    return egg & salt & butter;
}
let result3 = halfryegg2(1, 2, 3);
console.log(result3);
// //wide = noreturn
let a = 8;
function greet5(num) {
    let a5 = 5;
    if (true) {
        let a = 9 * num;
        console.log(a);
    }
    console.log(a);
    return (a);
}
greet5(3);
//console.log(a)
// // ///////////////rest parameter////////////////
// // function addition
// //            (num4 : number, 
// //             num2 : number, 
// //             num3: number = 0,
// //             num1 : number = 0 ) {
// //     return num4 + num2 + num3 + num1/// ye bh aik method hy btany ka ky kea return krna hy
// // }
// // console.log(addition(8,9,17, 78))
// let student1 = "alina"
// let student12 = "alinaa"
//                  //1    //2       //3  // length // address
//                  //0    //1       //2 // index 
// let students = ["ali", "alina", "alinaa",]  /// array ky zarye save krna asan hojata hy
// console.log(students[4]) /// hum yahan index likhty hain  bracket rotation
// console.log(students.indexOf("alina"))
// console.log(students.indexOf("alina" , 2)) // 2 ky bad wala 
// let num = [1, 2, 3, 4, 5 ,6]
// num.splice(2)
// console.log(num)
// num.splice(2,5)    
// num.slice(3, 5)
// num.indexOf(4)
// console.log(num.length)  // lenght pta chally gi
// num.shift()    /// first say left
// num.unshift(6) // first my add
// num.pop()   // last ka remove 
// num.splice(2)
//************************************************PRACTICE
//BASIC FUNCTION
function work(x) {
    console.log("Abaas will create an website");
    console.log("Hira will work on increasing sites Seo");
    console.log("Hurain will keep any eye on the work of abbas and hira");
}
work("officeWork");
//Division and addition in function
function Division(Num, nuM) {
    const conclusion = Num / nuM;
    console.log("divsion: " + conclusion);
}
Division(4, 5);
function addition(num, nuM) {
    const conclusion = num + nuM;
    console.log("addition: " + conclusion);
}
addition(8, 8);
//RETURN FUNCTION
function message(x, y) {
    let msg = "How old are you both?";
    let name = x + y;
    console.log(name + msg);
}
message("Alina", " and Wahiba ");
class car {
}
function greet(name) {
    return "hello" + name;
}
let numbers = [1, 2, 3];
